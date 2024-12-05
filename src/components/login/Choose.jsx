'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import user1 from '/public/user1.svg'
import user2 from '/public/user2.svg'
import user3 from '/public/user3.svg'
import user4 from '/public/user4.svg'
import user5 from '/public/user5.svg'
export default function Book() {
    let users = [
        { id: 1, image: user1, name: "موظف" },
        { id: 2, image: user2, name: "مشرف" },
        { id: 3, image: user3, name: "ناقل" },
        { id: 4, image: user4, name: "عميل" },
        { id: 5, image: user5, name: "مندوب" },
    ]

    return (
        <div className="user">
            <h2>اي شخص انت ؟</h2>
            <div className="users">
                {
                    users.map((user) =>
                        <div className="user-item" key={user.id}>
                            <Image src={user.image} alt="Mazar" width={100} height={100} />
                            <h3>{user.name}</h3>
                        </div>
                    )
                }
            </div>
        </div>
    );
}
