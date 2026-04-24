"use client";

import { Htag, Button, Ptag, Tag, Rating } from '@/components';
import { useState } from 'react';


export default function Home() {
    const [rating, setRating] = useState<number>(4);

  return (
    <>
        <Htag tag="h1">Tag H1</Htag>
        <Htag tag="h2">Tag H2</Htag>
        <Htag tag="h3">Tag H3</Htag>
        <Button appearance="primary" arrow='right'>Primary Button</Button>
        <Button appearance="ghost" arrow='down'>Ghost Button</Button>
        <Ptag tag="p14">Paragraph 14</Ptag>
        <Ptag tag="p16">Paragraph 16</Ptag>
        <Ptag tag="p18">Paragraph 18</Ptag>
        <Tag size="s" >Ghost</Tag>
        <Tag size="m" color="red">Medium Red Tag</Tag>
        <Tag size="s" color="green">Large Green Tag</Tag>
        <Tag color="primary">Medium Primary Tag</Tag>
        <Tag size="s" color="green" href="https://google.com">Google</Tag>
        <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}
