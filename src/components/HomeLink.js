const HomeLink = (props) => {
    return (
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="..." class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h2 class="card-title">{props.title}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeLink
