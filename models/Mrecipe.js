
// 레시피 모델 정의
const RECIPESMODEL = (sequelize, DataTypes) =>{
    // sequelize 매개변수 :  models/Mrecipe.js 에서의 sequelize (db 연결 정보를 입력하여)
    // DataTypes 매개변수 : models/Mrecipe.js 에서의 Sequelize(sequelize 패키지 자체 )
    const RECIPES = sequelize.define(
        'Recipe',  // param1 : 모델 이름 설정
        { // param2 : 모델 컬럼 정의
        recipe_num:{
            // recipe int not null primary key auto_increment
            type:DataTypes.INTEGER,
            primaryKey : true,
            allowNull : false,
            autoIncrement :true,
        },
        user_id :{
            // USER_ID VARCHAR(50) NOT NULL,
            type:DataTypes.STRING(50),
            allowNull:false,
        },
        title:{
            // TITLE TEXT NOT NULL,
            type:DataTypes.TEXT,
            allowNull : false,
        },
        content:{
            // CONTENT TEXT NOT NULL,
            type:DataTypes.TEXT,
            allowNull : false,
        },
        likes_count:{
            // LIKES_COUNT INT NOT NULL,
            type:DataTypes.INTEGER,
            allowNull : false,
        },
        main_ingredient:{
            // MAIN_INGREDIENT VARCHAR(50) NOT NULL,
            type:DataTypes.STRING(50),
            allowNull : false,
        },
        main_ing_detail:{
            // MAIN_ING_DETAIL TEXT NULL,
            type:DataTypes.TEXT,
            allowNull : true,
        },
        sub_ingredient_detail:{
            // SUB_INGREDIENT TEXT NULL,
            type:DataTypes.TEXT,
            allowNull : true,
        },
    },
    { // param3 : 모델 옵션 정의
        freezeTableName : true , // 테이블 명을 그대로 사용한다. (복수형으로 바까주지 X)
        // timestamps : false, // 데이터의 추가/수정 시간을 자동으로 기록(컬럼)
    });
    return RECIPES;
}
module.exports=RECIPESMODEL;
// 레시피 속의 이미지 저장 테이블
const RECIPE_IMG_MODEL = (sequelize, DataTypes) =>{
    const RECIPES_IMG = sequelize.define(
        'RecipeImg',  // param1 : 모델 이름 설정
        { // param2 : 모델 컬럼 정의
        image_num:{
            // IMAGE_NUM INT auto_increment primary key,
            type:DataTypes.INTEGER,
            primaryKey : true,
            allowNull : false,
            autoIncrement :true,
        },
        recipe_num :{
            // RECIPE_NUM INT NOT NULL ,
            type:DataTypes.INT,
            allowNull:false,
        },
        image_url:{
            // IMAGE_URL VARCHAR(255) ,
            type:DataTypes.STRING(255),
            allowNull : true,
        },
    },
    { // param3 : 모델 옵션 정의
        freezeTableName : true ,
        // timestamps : false,
    });
    return RECIPES_IMG;
}
module.exports=RECIPE_IMG_MODEL;