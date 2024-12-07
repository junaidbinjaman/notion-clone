'use client';
import React from "react";
import Document from "@/components/Document";

type DocumentPageProps = {
    params: Promise<{
        id: string
    }>
}

function DocumentPage({params}: DocumentPageProps) {
    
    const {id} = React.use(params)

    console.log(id);
    
  return (
    <div className="flex flex-col flex-1 min-h-screen">
        <Document id={id} />
    </div>
  )
}

export default DocumentPage