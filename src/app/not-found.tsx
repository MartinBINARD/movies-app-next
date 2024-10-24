const NotFound = () => {
  return (
    <div className=" flex flex-col justify-center items-center w-full min-h-[90vh] text-secondary font-montserrat">
      <h1 className="m-0 text-8xl font-bold">404</h1>
      <p className="text-lg">
        Oups, la page que vous demandez n&apos;existe pas.
      </p>
    </div>
  );
};

export default NotFound;
