import React, { useCallback, useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, Editor, SubmitButton } from './styles';

import api from '../../services/api';
import TinyMCE from '../../components/TinyMCE';

const SetupAboutUs: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [description, setDescription] = useState('');
  const history = useHistory();

  useEffect(() => {
    api.get('aboutus').then(({ data }) => {
      setDescription(data.description);
      setLoading(false);
    });
  }, []);

  const handleSubmit = useCallback(() => {
    api.post('aboutus', { description }).then(() => {
      alert('Descrição atualizada com sucesso!');
      history.push('aboutus');
    });
  }, [description, history]);

  const handleEditorChange = useCallback(content => {
    setDescription(content);
  }, []);

  return (
    <Container>
      <Header />

      <Editor>
        {!loading && (
          <TinyMCE
            description={description}
            onEditorChange={handleEditorChange}
          />
        )}
      </Editor>

      <SubmitButton name="Submit" onClick={handleSubmit} />

      <Footer />
    </Container>
  );
};

export default SetupAboutUs;
