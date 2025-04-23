'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import user1 from '/public/user1.svg'
import user2 from '/public/user2.svg'
import user3 from '/public/user3.svg'
import user4 from '/public/user4.svg'
import user5 from '/public/user5.svg'
import Link from 'next/link';
export default function Book() {
    let users = [
        { id: 1, image: user1, name: "موظف" , url:"https://dev.wathiq.io/staff/login"},
        { id: 3, image: user3, name: "ناقل",url:"https://dev.wathiq.io/login" },
        { id: 2, image: user2, name: "مشرف" ,url:"https://dev.wathiq.io/supervisor/login"},
        { id: 4, image: user4, name: "عميل" ,url:"https://dev.wathiq.io/station/login"},
        { id: 5, image: user5, name: "مندوب",url:"https://dev.wathiq.io/representative/login"},
    ]
    let spicialUsers = users.slice(0, 2);
    let normalUsers = users.slice(2);
    return (
        <div className="user">
            <h2>اي شخص انت ؟</h2>
            <div className="flex justify-center flex-wrap w-full gap-3">
                <div className="sectio border border-[#f9f9f9] justify-center flex-wrap p-5 rounded-xl flex items-center gap-7 ">
                {
                    spicialUsers.map((user) =>
                        <Link href={user.url} className="user-item w-fit min-w-48" key={user.id}>
                            <Image src={user.image} alt="Wathiq" width={100} height={100} />
                            <h3>{user.name}</h3>
                        </Link >
                    )
                }
                </div>
                <div className="sectio border border-[#f9f9f9] justify-center flex-wrap  p-5 rounded-xl flex items-center gap-7 ">
                {
                    normalUsers.map((user) =>
                        <Link href={user.url} className="user-item w-fit min-w-48" key={user.id}>
                            <Image src={user.image} alt="Wathiq" width={100} height={100} />
                            <h3>{user.name}</h3>
                        </Link >
                    )
                }
                </div>
            </div>
        </div>
    );
}
