const Footer = () => {
  return (
    <footer className="bg-black text-gray-500 py-6 border-t border-dark-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">
          Copyright © {new Date().getFullYear()} Mohammed Tayyab. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 