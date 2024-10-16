interface GenreIdPageProps {
  params: {id: string };
}

export const GenreIdPage = ({params}: GenreIdPageProps) => {
  return (
    <div>
      <p>Genre id : {params.id}</p>
    </div>
  );
}

export default GenreIdPage;