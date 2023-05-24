import { useParams, useSearchParams } from 'react-router-dom';

function Page() {
  const params = useParams();
  const [searchParams] = useSearchParams();
  console.log(params);
  console.log(searchParams.get('foo'));
  return <h2>ほげえええ</h2>;
}

export default Page;
