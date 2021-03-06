import MUtil from 'util/mm.jsx';
const _mm = new MUtil;

class Product{
    // 获取用户列表
    getProductList(listParam){
        let url  = '',
            data =  {};

        if(listParam.listType === 'list'){
            url          = '/manage/product/list.do';
            data.pageNum = listParam.pageNum;
        }else if(listParam.listType === 'search'){
            url = '/manage/product/search.do';
            data.pageNum               = listParam.pageNum;
            data[listParam.searchType] = listParam.keyword;
        }



        return _mm.request({
            type    : 'post',
            url     :  url,
            data    : data
        });
    }
    // 变更商品销售状态
    onSetProductStatus(productInfo){
        return _mm.request({
            type    : 'post',
            url     : '/manage/product/set_sale_status.do',
            data    : productInfo
        });
    }

    /**
     * 品类相关
     */
    getCategoryList( firstCategoryId ){
        return _mm.request({
            type    : 'post',
            url     : '/manage/category/get_category.do',
            data    : {
                categoryId: firstCategoryId || 0
            }
        });
    }
}
export default Product;