'use client';

import {FormEvent, useState, useTransition} from 'react';
import {Input} from './ui/input';
import {Button} from './ui/button';

type DocumentProps = {
    id: string;
};

function Document({id}: DocumentProps) {
    const [input, setInput] = useState<string>('');
    const [isUpdating, startTransition] = useTransition();

    const updateTitle = (e: FormEvent) => {
        e.preventDefault();
        console.log(input);
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
