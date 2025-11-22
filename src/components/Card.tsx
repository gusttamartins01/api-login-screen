interface CardProps {
  title: string;
  children: React.ReactNode;
}

export default function Card({ title, children }: CardProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-white">
      <h2 className="text-xl font-bold mb-3">{title}</h2>
      {children}
    </div>
  );
}
