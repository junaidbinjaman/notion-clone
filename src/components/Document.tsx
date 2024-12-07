'use client';

import {FormEvent, useEffect, useState, useTransition} from 'react';
import {Input} from './ui/input';
import {Button} from './ui/button';
import {doc, updateDoc} from 'firebase/firestore';
import {db} from '../../firebase';
import {useDocumentData} from 'react-firebase-hooks/firestore';

type DocumentProps = {
    id: string;
};

function Document({id}: DocumentProps) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [data, loading, error] = useDocumentData(doc(db, 'documents', id));
    const [input, setInput] = useState<string>('');
    const [isUpdating, startTransition] = useTransition();

    useEffect(() => {
        if (data) {
            setInput(data.title);
            console.log('Client Log: ' + id);
        }
    }, [data]);

    const updateTitle = (e: FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            startTransition(async () => {
                await updateDoc(doc(db, 'documents', id), {
                    title: input,
                });
            });
        }
    };

    return (
        <div>
            <div>
                <form onSubmit={updateTitle}>
                    {/* update title... */}
                    <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />

                    <Button disabled={isUpdating} type='submit'>
                        {isUpdating ? 'Updating' : 'Update'}
                    </Button>

                    {/* IF */}
                    {/* isOwner && InviteUser, DeleteDocument */}
                </form>
            </div>

            <div>
                {/* ManageUsers */}

                {/* Avatars */}
            </div>

            {/* Collaborative Editor */}
        </div>
    );
}

export default Document;
