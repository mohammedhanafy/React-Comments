import React, { useState } from 'react';
import { GlobalProvider } from './context-api';
import AddComment from './Components/AddComment';
import Comments from './Components/Comments';

const app = (props) => {

  return (
    <div className="App">
      <GlobalProvider>
        <AddComment />
        <Comments />
      </GlobalProvider>
    </div>
  )
}

export default app;
