export const cardImagesProjection = /* groq */ `
    "images": {
        "light": coalesce(cardImages.light, image),
        "dark": coalesce(cardImages.dark, imageDark)
    }
`;

export const markDefsFragment = /* groq */ `
    markDefs[]{
        ...,
        _type == "jokul_internal_link" => {
            ...,
            article->{
                _type,
                "name": coalesce(name, tema, version),
                short_description,
                "slug": slug.current,
                ${cardImagesProjection}
            }
        },
        _type == "componentPageLink" => {
            ...,
            component->{
                name,
                short_description,
                "slug": slug.current,
                figma_image,
                ${cardImagesProjection}
            }
        }
    }
`;

export const commonBlockBody = /* groq */ `
    ...,
    ${markDefsFragment},
    _type == "jokul_examples" => {
        ...,
        examples[]->{
            name,
            id,
            description,
            height,
            inert,
            code
        }
    },
        _type == "jokul_linkCard" => {
        ...,
        "url": coalesce(
            url,
            select(
                article->_type == "jokul_component"     => "/komponenter/"   + article->slug.current,
                article->_type == "jokul_blog_post"     => "/blog/"          + article->slug.current,
                article->_type == "jokul_fundamentals"  => "/fundamenter/"   + article->slug.current,
                article->_type == "jokul_release_notes" => "/release-notes/" + article->slug.current,
                article->_type == "jokul_monster"       => "/monster/"       + article->slug.current
            )
        ),
        "images": {
            "light": coalesce(article->cardImages.light, article->image),
            "dark": coalesce(article->cardImages.dark, article->imageDark)
        }
    },
    _type == "jokul_qa" => {
        ...,
        faq[]{
            ...,
            answer[]{
                ...,
                ${markDefsFragment}
            }
        }
    },
    _type == "jokul_messageBox" => {
        ...,
        message[]{
            ...,
            ${markDefsFragment}
        }
    }
`;
