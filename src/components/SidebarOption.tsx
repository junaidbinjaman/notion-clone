import {doc} from 'firebase/firestore';
import Link from 'next/link';
import React from 'react';
import {useDocumentData} from 'react-firebase-hooks/firestore';
import {bd} from '../../firebase';
import {usePathname} from 'next/navigation';

type SidebarOptionProps = {
    href: string;
    id: string;
};

function SidebarOption({href, id}: SidebarOptionProps) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [data, loading, error] = useDocumentData(doc(bd, 'documents', id));
    const pathname = usePathname();
    const isActive = href.includes(pathname) && pathname !== '/';

    if (!data) return;
    return (
        <Link
            href={href}
            className={`relative border p-2 rounded-md ${
                isActive
                    ? 'bg-gray-300 font-bold border-black'
                    : 'border-gray-400'
            }`}
        >
            <p className='truncate'>{data?.title}</p>
        </Link>
    );
}

export default SidebarOption;