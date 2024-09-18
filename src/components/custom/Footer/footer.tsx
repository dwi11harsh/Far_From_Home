export const Footer = () => {
  const currentYear = getCurrentYear();
  return (
    <footer className="text-white py-2 bg-inherit">
      <div className="container mx-auto px-4 text-center">
        <p className="text-slate-500">
          &copy; {currentYear} Far From Home. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const getCurrentYear = () => {
  return new Date().getFullYear();
};
