import React from 'react';


const Gravatar = ({ email, size = 100 }) => {
    const emailHash = md5(email.trim().toLowerCase()).toString();
    const gravatarUrl = `https://www.gravatar.com/avatar/${emailHash}?s=${size}&d=identicon`;

    return (
        <img
            src={gravatarUrl}
            alt="Gravatar"
            width={size}
            height={size}
            style={{ borderRadius: "50%" }}
        />
    );
};

export const BlogArticleAuthor = ({ author }) => {
    <Gravatar email={'rlucato95@gmail.com'}/>
};