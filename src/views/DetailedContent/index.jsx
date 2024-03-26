import { useParams } from 'react-router-dom';
import CustomHeader from '../../components/surface/CustomHeader';
import { useEffect, useState } from 'react';
import getDataTmdb from '../../config/http';

/// ALERTA: Renderização apenas funcionando para filmes, uma vez que a URL para detalhes de séries mudam. Será necessário efetuar uma validação para saber qual URL chamar
function DetailedContent() {
  const { contentId } = useParams();
  const [content, setContent] = useState({});
  const endpoint = `3/movie/${contentId}`;

  useEffect(() => {
    getDataTmdb({ endpoint, onSuccess, onError });
  }, []);

  function onSuccess(response) {
    setContent(response.data);
  }

  function onError(error) {
    console.log(error);
  }

  return (
    <>
      <CustomHeader
        title={
          content.original_title
            ? content.original_title
            : content.original_name
        }
      />
    </>
  );
}

export default DetailedContent;
