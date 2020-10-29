import React, { useEffect, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, Content } from './styles';
import api from '../../services/api';

const Home: React.FC = () => {
  const [aboutUs, setAboutUs] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('aboutus').then(({ data }) => {
      setAboutUs(data.description);
      setLoading(false);
    });
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <div>
          {!loading && <Editor inline disabled initialValue={aboutUs} />}
        </div>
      </Content>
      <Footer />
    </Container>
  );
};

export default Home;
