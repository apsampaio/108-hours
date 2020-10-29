import React from 'react';
import { Editor, IAllProps } from '@tinymce/tinymce-react';

interface TinyMCEProps extends IAllProps {
  description: string;
}

const TinyMCE: React.FC<TinyMCEProps> = ({ description, onEditorChange }) => {
  return (
    <Editor
      initialValue={description}
      onEditorChange={onEditorChange}
      init={{
        menubar: false,
        min_height: 500,
        branding: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen quickbars',
          'insertdatetime media table paste code help wordcount autoresize',
        ],
        toolbar:
          'undo redo | formatselect | bold italic backcolor alignleft aligncenter alignright alignjustify bullist numlist outdent indent | removeformat | help',
      }}
    />
  );
};

export default TinyMCE;
