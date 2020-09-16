const ClassCard = ({ title, categories, description, teachers }) => {
    return (
        <section className="card">
            <div className="card-header">
                <h3>{title}</h3>
                <div className="pill-row">
                    {categories.map(category => 
                        <span key={category} className="pill">{category}</span>
                    )}
                </div>
            </div>
            <div className="card-divider"></div>
            <div className="card-main">
                <p className="card-description">
                    {description}
                </p>
            </div>
            <div className="card-footer">
                <div className="card-teachers">
                    {teachers.map(teacher => 
                        <span key={teacher} className="teacher">{teacher}</span>
                    )}
                </div>
                <button className="card-btn">MORE</button>
            </div>
        </section>
    );
};