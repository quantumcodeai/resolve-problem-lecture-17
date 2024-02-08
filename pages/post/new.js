import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import App from 'next/app';
import { AppLayout } from '../../components/AppLayout';

export default function NewPost(props) {
    console.log('NEW POST PROPS: ', props);
    const handleClick = async () => {
      const response = await fetch(`/api/generatePost`, {
        method: 'POST',
      });
      const json = await response.json();
      console.log('RESULT: ', json);
    }
    return (
    <div>
      <h1>This is the new post page</h1>   
      <button className='btn' onClick={handleClick}>
        Generate  
      </button> 
    </div>
    );
}

NewPost.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};

export const getServerSideProps = withPageAuthRequired ({
  async getServerSideProps(ctx) {
    return {
      props: {},
   };
  },
});


