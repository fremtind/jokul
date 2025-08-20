import React from "react";

const content1 = (
    <>
        <p className="jkl-body">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
        </p>
    </>
);

const content2 = (
    <>
        <p className="jkl-body">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
        </p>
        <p className="jkl-body">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
        </p>
    </>
);

const content3 = (
    <>
        <p className="jkl-body">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
        </p>
        <p className="jkl-body">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
        </p>
        <p className="jkl-body">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
        </p>
    </>
);

const content4 = (
    <>
        <p className="jkl-body">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
        </p>
        <p className="jkl-body">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
        </p>
        <p className="jkl-body">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
        </p>
        <p className="jkl-body">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
        </p>
    </>
);

const contentBlocks = [content1, content2, content3, content4];

export function randomContentBlock(except?: JSX.Element): JSX.Element {
    let content =
        contentBlocks[Math.floor(Math.random() * contentBlocks.length)];
    if (content === except) {
        content = randomContentBlock(except);
    }
    return content;
}
