const PageTitle = ({
  sideName,
  mainName,
}: {
  sideName: string;
  mainName: string;
}) => {
  return (
    <h1 className="text-4xl text-center font-semibold my-8">
      {sideName} <span className="text-[var(--bGreen)] ">{mainName}</span>
    </h1>
  );
};

export default PageTitle;
