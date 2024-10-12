interface MovieIdPageProps {
  params: { id: string };
}

const MovieIdPage = ({ params }: MovieIdPageProps) => {
  return (
    <div>
      <h1>Movie page with id : {params.id}</h1>
    </div>
  )
}

export default MovieIdPage;