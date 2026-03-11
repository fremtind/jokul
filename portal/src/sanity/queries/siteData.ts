import { defineQuery } from "next-sanity";

export const siteDataQuery = defineQuery(
    `*[_type == "jokul_siteData"]{
        ...,
        "seo": {
            "title": coalesce(seo.title, title, ""),
            "description": coalesce(seo.description,  ""),
            "image": seo.image,
            "noIndex": seo.noIndex == true
          },
        footer {
            text,
            linkGroups[]{
                title,
                linkList[]{
                    text,
                    "url": select(
    url[0]._type == "internalLink" => select(
      url[0].internalReference->_type == "jokul_component" => "komponenter/" + url[0].internalReference->slug.current,
      url[0].internalReference->_type == "jokul_fundamentals" => "fundamenter/" + url[0].internalReference->slug.current,
      url[0].internalReference->_type == "jokul_blog_post" => "blog/" + url[0].internalReference->slug.current,
      "/" + url[0].internalReference->slug.current
    ),
    url[0]._type == "externalLink" => url[0].url
  )
                }
            }
        },
        "date": _createdAt,
    } | order(_createdAt desc)[0]`,
);
