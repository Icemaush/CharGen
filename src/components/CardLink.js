const CardLink = (title) => {
    return (
        <div class="card mb-3" style="max-width: 200px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="wow_logo.png" class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h1 class="card-title">{title}</h1>
                </div>
                </div>
            </div>
        </div>
    )
}

export default CardLink
