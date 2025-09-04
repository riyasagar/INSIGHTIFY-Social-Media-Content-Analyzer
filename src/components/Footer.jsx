export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Insightify. All Rights Reserved.</p>

      <style>{`
        .footer {
          text-align: center;
          padding: 20px;
          background-color: #f8f9fa;
          border-top: 1px solid #ddd;
          font-family: Arial, sans-serif;
          color: #555;
        }
      `}</style>
    </footer>
  );
}
