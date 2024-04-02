import { Button } from './styles';

function GenreButton({ genreId, label }) {
  return <Button key={genreId}>{label}</Button>;
}

export default GenreButton;
