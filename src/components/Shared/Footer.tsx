const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="flex justify-center items-center pt-24 bg-base-300 text-base-content text-center ">
      <aside>
        <p className="text-xl">
          Copyright © {date} - All right reserved by Rouge Industries Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
