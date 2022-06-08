import WishListDetail from "./WishListDetail";

const WishListList = ({wishListList, deleteElement, addElement}) => {
    return (
        <div className="wishListList">
            {
                wishListList.map(wishListtItem => {
                    return <WishListDetail key={wishListtItem.id} wishDetail={wishListtItem} deleteElement={deleteElement} addElement={addElement}/>
                })
            }
        </div>
    )
}

export default WishListList;