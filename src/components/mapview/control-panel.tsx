const ControlPanel = () => {
    return (
        <div className="esri-widget" id="crimes-filter">
            <div className="crime-item visible-crime" data-crime="100">100 incidents</div>
            <div className="crime-item visible-crime" data-crime="50-99">50 - 99 incidents</div>
            <div className="crime-item visible-crime" data-crime="49">  50 incidents</div>
        </div>
    )
}

export default ControlPanel;
