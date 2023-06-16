import React from 'react';
import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox';
import { PaletteTree } from './palette';
import SinglePizzaPage from '../templates/Pizza';

const ComponentPreviews = () => <Previews palette={<PaletteTree />} >
  <ComponentPreview
    path='/SinglePizzaPage'>
    <SinglePizzaPage />
  </ComponentPreview>
</Previews>;

export default ComponentPreviews;
