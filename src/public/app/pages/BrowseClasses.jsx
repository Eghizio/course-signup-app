// will be fetched
const cards = [
    {
        id: '_' + Math.random().toString(36).substr(2, 9),
        title: "Some class title",
        categories: ["Math", "Information Technology", "Biology"],
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Consectetur et consequatur a fuga, vero numquam, officiis incidunt
        ipsam in sit dignissimos dicta minima!
        Eveniet, blanditiis neque commodi numquam accusamus aperiam expedita.
        Voluptatibus quia repudiandae exercitationem a eius iure fuga eaque
        praesentium quod, impedit expedita enim placeat doloribus saepe obcaecati odio!`,
        teachers: ["Mr Willson", "Mr Glanus", "Ms George Bush"]
    },
    {
        id: '_' + Math.random().toString(36).substr(2, 9),
        title: "Some class title",
        categories: ["Math", "Information Technology", "Biology"],
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Consectetur et consequatur a fuga, vero numquam, officiis incidunt
        ipsam in sit dignissimos dicta minima!
        Eveniet, blanditiis neque commodi numquam accusamus aperiam expedita.
        Voluptatibus quia repudiandae exercitationem a eius iure fuga eaque
        praesentium quod, impedit expedita enim placeat doloribus saepe obcaecati odio!`,
        teachers: ["Mr Willson", "Mr Glanus", "Ms George Bush"]
    },
    {
        id: '_' + Math.random().toString(36).substr(2, 9),
        title: "Some class title",
        categories: ["Math", "Information Technology", "Biology"],
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Consectetur et consequatur a fuga, vero numquam, officiis incidunt
        ipsam in sit dignissimos dicta minima!
        Eveniet, blanditiis neque commodi numquam accusamus aperiam expedita.
        Voluptatibus quia repudiandae exercitationem a eius iure fuga eaque
        praesentium quod, impedit expedita enim placeat doloribus saepe obcaecati odio!`,
        teachers: ["Mr Willson", "Mr Glanus", "Ms George Bush"]
    },
];

const BrowseClasses = () => {
    const title = useTitle("Zajęcia");

    return (
        <React.Fragment>
            Browse {false && "filter by category/subject/teacher/search by title"}
            <Column>
                {cards.map(card => 
                    <ClassCard
                        key={card.id}
                        title={card.title}
                        categories={card.categories}
                        description={card.description}
                        teachers={card.teachers}
                    />
                )}
            </Column>
        </React.Fragment>
    );
};