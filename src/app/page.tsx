"use client"
import CButton from "@/components/custom/custom-button";
import { Send } from 'lucide-react';

export default function Home() {

  const handleSubmit = () => {
    console.log('handleSubmit');
    
  }
  return (
    <>
      <CButton onClick={handleSubmit} tooltip="Click me!" style={{backgroundColor:'red'}} className="" isLoading={false} icon={<Send height={18} width={18}/>}>Submit</CButton>
    </>
  );
}
