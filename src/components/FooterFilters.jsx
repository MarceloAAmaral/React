import classes from './FooterFilters.module.scss';
function FooterFilters() {
    return (
    <>
        <div className={classes.filters}>
            <div>
                <p className={`${classes['main-text']}` }>Footer Filters</p>
            </div>
        </div>
    </>
    )
  }
  
  export default FooterFilters