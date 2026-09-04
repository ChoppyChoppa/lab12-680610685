/*
 * อย่าลืมเปลี่ยน fullName และ studentId ให้เป็นของตัวเอง
 */
interface FooterProps {
  year: number;
  fullName: string;
  studentId: string;
}

export default function Footer({ year, fullName, studentId }: FooterProps) {
  return (
    <footer className="text-center w-100">
      <p className="text-white bg-secondary p-4 m-0">
        Copyright © {year} {fullName} {studentId}
      </p>
    </footer>
  );
}
