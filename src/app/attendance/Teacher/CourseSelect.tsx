"use client";

import {
  StudentProfile,
  TeacherCourse,
  getStudentsFromCourseId,
} from "@/lib/db/actions";
import {
  Button,
  Input,
  Select,
  SelectItem,
  SelectProps,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from "@nextui-org/react";
import { use, useEffect, useState } from "react";

interface Props {
  courses: TeacherCourse[] | undefined;
  onSelectionChange?: SelectProps["onSelectionChange"];
}

const columns = [
  {
    key: "firstName",
    label: "First Name",
  },
  {
    key: "lastName",
    label: "Last Name",
  },
  {
    key: "id",
    label: "Student ID",
  },
  {
    key: "email",
    label: "email",
  },
];

export default function AttendanceSelect({ courses }: Props) {
  const [selectedCourseId, setSelectedCourseId] = useState<
    Set<number> | undefined
  >(undefined);
  const [students, setStudents] = useState<StudentProfile[]>([]);
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));
  const [date, setDate] = useState<string>('2023-09-09');

  useEffect(() => {
    async function setStudentsFromCourseId(courseId: number) {
      const students = await (
        await fetch(`/api/courseStudents/${courseId}`)
      ).json();
      setStudents(students);
    }

    // @ts-expect-error set doesn't work properly
    const courseId = selectedCourseId?.currentKey;
    if (courseId) {
      setStudentsFromCourseId(courseId);
    }
  }, [selectedCourseId]);

  function filteredStudents() {
    let attendance = students.map(student => ( {studentId: student.id, status: 'A'} ));
    attendance.map((student, index) => {
      if (Array.from(selectedKeys).includes(student.studentId.toString())) {
        attendance[index].status = 'P';
      }
    })
    return attendance;
  }

  async function onSubmit() {
    console.log(date);
    console.log(filteredStudents());
    await fetch('/api/attendance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        date: date,
        attendance: filteredStudents(),
        courseId: selectedCourseId?.currentKey
      })
    })
    alert('Attendance added!');
  }

  return (
    <main className="p-8">
      <div className="flex gap-4 items-center">
        <h1 className="text-2xl font-semibold pb-2">Add Attendance</h1>

        <Select
          items={courses ?? []}
          placeholder="Select a course"
          variant="underlined"
          className="mb-4 max-w-sm"
          size="sm"
          onSelectionChange={(course) =>
            setSelectedCourseId(course as Set<number>)
          }
          aria-label="Select a course"
        >
          {(course) => (
            <SelectItem key={course.id} value={course.courseName}>
              {course.courseName}
            </SelectItem>
          )}
        </Select>
      </div>
      {selectedCourseId === undefined && (
        <p className="text-center text-gray-500 pt-8">
          Select a course to view students.
        </p>
      )}
      {/* {students?.length === 0 && selectedCourseId && (
        <p className="text-center text-gray-500 pt-8">
          No students are enrolled in this course.
        </p>
      )} */}
      {students?.length > 0 && (
        <Table
          aria-label="Example table with dynamic content"
          selectionMode="multiple"
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={students}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
      {students?.length > 0 && (
        <div className="flex gap-4 items-center pt-3">
          <Input
            type="date"
            label="Date"
            placeholder="Date"
            variant="faded"
            className="w-64"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <Button className="mt-0" color="success" onClick={onSubmit}>
            Add Attendance
          </Button>
        </div>
      )}
    </main>
  );
}
