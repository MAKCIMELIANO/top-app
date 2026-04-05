"use client";

import { Htag, Button } from '@/components';


export default function Home() {
  return (
    <main>
        <Htag tag="h1">Tag H1</Htag>
        <Htag tag="h2">Tag H2</Htag>
        <Htag tag="h3">Tag H3</Htag>
        <Button appearance="primary" onClick={() => alert('Primary Button Clicked')}>Primary Button</Button>
        <Button appearance="ghost" onClick={() => alert('Ghost Button Clicked')}>Ghost Button</Button>
    </main>
  );
}
