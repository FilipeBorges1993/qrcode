<template>
    <div :style="{ 
        backgroundImage: `url('/img/bg.jpg')`,
        width: '100%',
        height: '100%',
        position: 'fixed',
        overflowY: 'scroll',
        overflowX: 'hidden'
    }">
        <div :style="{ 
            width: '80%',
            margin: 'auto',
            height: '100%'
        }">
            <br>    
            <div :style="{ 
                width: '100%',
                height: '70px',
                backgroundColor: '#ffffff0f',
                borderRadius: '10px',
                backdropFilter: 'blur(10px)',
                paddingLeft: '8px',
            }">
                <div v-for="menu in menus" :style="{
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#929779',
                    marginTop: '10px',
                    marginRight: '7px',
                    float: 'left',
                    padding: '8px'
                }" :class="menu.active ? 'activeBtn' : '' " @click="menuTrigger(menu.id)">
                    <img class="hidden h-8 w-auto lg:block" :src="menu.img">
                </div>
            </div >

            <br>    
            <div v-if="CocMenu_" :style="{ 
                width: '90%',
                margin: '0px auto',
                height: '50px',
                backgroundColor: '#ffffff0f',
                borderRadius: '10px',
                backdropFilter: 'blur(10px)',
                paddingLeft: '8px',
                textAlign: 'center'
            }">
                <div
                    @click="triggerLable('winterSeason')"
                    :style="{
                        borderRight: '1px solid #e6f0c0',
                        height: '100%',
                        width: '33.33%',
                        float: 'left'
                    }"
                >
                    <p :class="winterSeason ? 'activeLable' : false" :style="{
                            fontSize: '110%',
                            fontWeight: 'bold',
                            color: 'rgb(146 152 121)',
                            marginTop: '13px',
                            display: 'inline-flex'
                        }">
                        Winter Season
                    </p>
                </div>

                <div
                    @click="triggerLable('classicos')"
                    :style="{
                        borderRight: '1px solid #e6f0c0',
                        height: '100%',
                        width: '33.33%',
                        float: 'left'
                    }"
                >
                    <p :class="classicos ? 'activeLable' : false"  :style="{
                            fontSize: '110%',
                            fontWeight: 'bold',
                            color: 'rgb(146 152 121)',
                            marginTop: '13px',
                            display: 'inline-flex'
                        }">
                        Clássicos
                    </p>
                </div>

                <div
                    @click="triggerLable('mocktails')"
                    :style="{
                        height: '100%',
                        width: '33.33%',
                        float: 'left'
                    }"
                >
                    <p :class="mocktails ? 'activeLable' : false" :style="{
                            fontSize: '110%',
                            fontWeight: 'bold',
                            color: 'rgb(146 152 121)',
                            marginTop: '13px',
                            display: 'inline-flex'
                        }">
                        Mocktails
                    </p>
                </div>

            </div >
            <div v-if="sishaMenu_" :style="{ 
                width: '90%',
                margin: '0px auto',
                height: '50px',
                backgroundColor: '#ffffff0f',
                borderRadius: '10px',
                backdropFilter: 'blur(10px)',
                paddingLeft: '8px',
                textAlign: 'center'
            }">
                <div
                    @click="triggerLableShicha('clasic')"
                    :style="{
                        borderRight: '1px solid #e6f0c0',
                        height: '100%',
                        width: '50%',
                        float: 'left'
                    }"
                >
                    <p :class="clasic ? 'activeLable' : false" :style="{
                            fontSize: '110%',
                            fontWeight: 'bold',
                            color: 'rgb(146 152 121)',
                            marginTop: '13px',
                            display: 'inline-flex'
                        }">
                        Clasic
                    </p>
                </div>

                <div
                    @click="triggerLableShicha('prestige')"
                    :style="{
                        height: '100%',
                        width: '50%',
                        float: 'left'
                    }"
                >
                    <p :class="prestige ? 'activeLable' : false"  :style="{
                            fontSize: '110%',
                            fontWeight: 'bold',
                            color: 'rgb(146 152 121)',
                            marginTop: '13px',
                            display: 'inline-flex'
                        }">
                        Prestige
                    </p>
                </div>

            </div >
            <br>    
            <br>    

            <div style="width:100%">

                <div class="grid lg:grid-cols-3 gap-6 xl:gap-x-12">
                    <div class="mb-6 lg:mb-0" v-for="el in elements">
                        <div class="relative block  rounded-lg shadow-lg" style="text-align: center; background-color: #929879">
                            <div class="flex">
                                <div
                                    class="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                                    data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <img src="https://scontent.fopo5-1.fna.fbcdn.net/v/t39.30808-6/307378991_579622177162609_3248697027315522335_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=tbuRtGMtxK4AX8gHhgv&_nc_ht=scontent.fopo5-1.fna&oh=00_AfDq7ohETuYzskw8PvI-eewywbVNFFX7PKInWJnXQs3pPg&oe=63A20401" class="w-full" />
                                    <a href="#!">
                                        <div
                                            class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                            style="background-color: rgba(251, 251, 251, 0.15)">
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="p-6">
                                <h5 class="font-bold text-lg mb-3">{{el.name}}</h5>
                                <p class="mb-4 pb-2">
                                    {{el.description}}
                                </p>
                                <p class="mb-4 pb-2" style="font-weight: bold;">
                                    Preço: {{el.price}}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br>    
            <br>    
            <br>    
            <br>    
        </div>
    </div>
</template>

<style>
    .activeBtn {
        background-color: #e6efc0 !important;
    }

    .activeLable {
        color: #e6efc0 !important;
    }
</style>

<script setup lang="ts">

    const menus = ref([
        {
            'img': '/img/hookah.svg',
            'active': false,
            'id':1
        },
        {
            'img': '/img/drink.svg',
            'active': true,
            'id':2
        },
        {
            'img': '/img/sangria.svg',
            'active': false,
            'id':3
        }
    ])
    
    const CocMenu_ = ref(true);
    const sishaMenu_ = ref(false);

    const mocktails = ref(true);
    const winterSeason  = ref(false);
    const classicos = ref(false);
    const prestige = ref(false);
    const clasic = ref(true);


    const mocktailsList = ref([
        {
            'img': 'https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg',
            'name': 'Blackberry Cream Soda',
            'description':'#AMORA PRETA, #LIMÃO',
            'price': '4€'
        },
        {
            'img': 'https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg',
            'name': 'Fantastic Oreo',
            'description':'#OREO, #CHOCOLATE, #BAUNILHA, CAFÈ',
            'price': '7€'
        },
        {
            'img': 'https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg',
            'name': 'Pink Lemon Lelis',
            'description':'#FRUTOS VERMELHOS, #LIMÃO',
            'price': '4€'
        },
        {
            'img': 'https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg',
            'name': 'Sherley Temple',
            'description':'#GINGER ALE, #GROSSELHA',
            'price': '4€'
        },
        {
            'img': 'https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg',
            'name': 'San Francisco',
            'description':'#LIMÃO, #LARANJA, #ANANÁS, #GROSSELHA',
            'price': '6€'
        },
        {
            'img': 'https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg',
            'name': 'Cherry Cola',
            'description':'#Cerejs, #COCACOLA',
            'price': '4€'
        },
        {
            'img': 'https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg',
            'name': 'Gardens Free',
            'description':'#MESTERIOSO MOCKTAIL DE AUTOR',
            'price': '5€'
        },
        {
            'img': 'https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg',
            'name': 'Mojito Virgem',
            'description':'#LIMÃO, #HORTELÃ',
            'price': '4.5€'
        },
    ])
    const winterSeasonList = ref([
        {
            'img': 'https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg',
            'name': 'Irish Coffee',
            'description':'#WHISKY IRLANDÊS, CAFÉ, CREME DE LEITE',
            'price': '6€'
        },
        {
            'img': 'https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg',
            'name': 'Salted Caramel Express Martini',
            'description':'#CAFÈ, #CARAMELO SALGADO, #VODKA, #BAILEYS',
            'price': '6€'
        },
        {
            'img': 'https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg',
            'name': 'Whisky Sour',
            'description':'#Whisky, #LIMÃO, #OVO',
            'price': '6€'
        },
        {
            'img': 'https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg',
            'name': 'Musteiro Rum Mule',
            'description':'#RUM, #LIMÃO, #ESPECIARIAS, #GENGIBRE',
            'price': '6€'
        },
        {
            'img': 'https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg',
            'name': 'Lady Grey Gin Fizz',
            'description':'#LIMÃO, #LADY GREY, #GIN, #OVO',
            'price': '6€'
        },
        {
            'img': 'https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg',
            'name': 'Spiced Cranberry Margarita',
            'description':'#CANELA, #LIMÃO, #CEREJA, #TEQUILA, #TRIPLE SECO',
            'price': '6.5€'
        },
        {
            'img': 'https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg',
            'name': 'Jack Frost Cocktail',
            'description':'#VODKA, #BLUE CORAÇÃO, #ANANÁS, #COCO',
            'price': '6€'
        },
    ])
    const classicosList = ref([
        {
            'img': 'https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg',
            'name': 'NEGRONI',
            'description':'#GIN, #MARTINI ROSS“O,#CAMPARI, #LARANJA',
            'price': '6€'
        },
        {
            'img': 'https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg',
            'name': 'DAIQUIRI',
            'description':'#RUM, #LIMÃO',
            'price': '5€'
        },
        {
            'img': 'https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg',
            'name': 'CAIPIRINHA',
            'description':'#CACHAÇA, #LIEA',
            'price': '5€'
        },
        {
            'img': 'https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg',
            'name': 'MOJITO',
            'description':'#RUM, #HORTELÃ, #LIMA',
            'price': '5€'
        },
        {
            'img': 'https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg',
            'name': 'MOJITO MARACUJÁ',
            'description':'#RUM, #HORTELÃ, #LIMA E #MARACUJA',
            'price': '6€'
        },
        {
            'img': 'https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg',
            'name': 'MOSCOW MULE',
            'description':'#VODKA, #GENGIBRE',
            'price': '7€'
        },
        {
            'img': 'https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg',
            'name': 'LONG ISLAND ICE TEA',
            'description':'#TEQUILA, #GIN, #VODKA, #RUM, #TRIPLE SECO',
            'price': '6.5€'
        },
        {
            'img': 'https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg',
            'name': 'TEQUILA SUNRISE',
            'description':'#TEQUILLA, #LARANJA, #GRENADINE',
            'price': '6€'
        },
    ])
    const sangriaList = ref([
        {
            'img': 'https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg',
            'name': 'MAÇA VERDE',
            'description':'#',
            'price': '17€'
        },
        {
            'img': 'https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg',
            'name': 'FRUTOS VERMELHOS',
            'description':'#',
            'price': '17€'
        },
        {
            'img': 'https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg',
            'name': 'MARACUJÁ',
            'description':'#',
            'price': '17€'
        },
        {
            'img': 'https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg',
            'name': 'CEREJA E MELÂNCIA',
            'description':'#',
            'price': '17€'
        },
        {
            'img': 'https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg',
            'name': 'BLUEBERRY',
            'description':'#',
            'price': '17€'
        },
    ])
    const sishaListc =  ref([
        {
            'img': 'https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg',
            'name': 'MENTA',
            'description':'#',
            'price': '10€'
        },
        {
            'img': 'https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg',
            'name': 'LOVE 66',
            'description':'#MELANCIA, #FRUTOS EXÓTICOS E #MENTA',
            'price': '10€'
        },
        {
            'img': 'https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg',
            'name': 'WATERMELON KIZZ',
            'description':'#MELANCIA, #MENTA',
            'price': '10€'
        },
        {
            'img': 'https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg',
            'name': 'RHAPSODY',
            'description':'#',
            'price': '10€'
        },
        {
            'img': 'https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg',
            'name': 'HAWAI',
            'description':'#ANANÁS, #MANGA E #MENTA',
            'price': '10€'
        },
        {
            'img': 'https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg',
            'name': 'LADY KILLER',
            'description':'#PÊSSEGO, #MANGA, #MENTA E #GELO',
            'price': '10€'
        },
        {
            'img': 'https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg',
            'name': 'TWO YELLOW',
            'description':'#MELOA E #MELÃNCIA',
            'price': '10€'
        },
        {
            'img': 'https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg',
            'name': 'BLUE ICE',
            'description':'#MIRTILO E #MENTOL',
            'price': '10€'
        },
        {
            'img': 'https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg',
            'name': 'SWISS BONBON',
            'description':'#PÊSSEGO, #MANGA, #MENTA E #GELO',
            'price': '10€'
        },
        {
            'img': 'https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg',
            'name': 'MI AMOR',
            'description':'#MENTA, #BANANA, #ANANÁS',
            'price': '10€'
        },
    ])
    const sishaListp =  ref([
        {
            'img': 'https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg',
            'name': 'ICE WILDBERRY',
            'description':'#FRUTOS VERMELHOS E, GEL0',
            'price': '15€'
        },
        {
            'img': 'https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg',
            'name': 'MAIAMI CITYIC',
            'description':'#BANANA, #ANANÁS E #MENTOL',
            'price': '15€'
        },
        {
            'img': 'https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg',
            'name': 'ICE PEACH',
            'description':'#',
            'price': '15€'
        },
        {
            'img': 'https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg',
            'name': 'ICE PEAR',
            'description':'#',
            'price': '15€'
        },
        {
            'img': 'https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg',
            'name': 'ICE LOVE',
            'description':'#Maracujá, #MELOA e GELO',
            'price': '15€'
        },

        {
            'img': 'https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg',
            'name': 'MOMENTO',
            'description':'#',
            'price': '15€'
        },
        {
            'img': 'https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg',
            'name': 'BONGO BANGO',
            'description':'#',
            'price': '15€'
        },
        {
            'img': 'https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg',
            'name': 'COCOPINE',
            'description':'#ANANÁS, #COCO #GELO',
            'price': '15€'
        },

        {
            'img': 'https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg',
            'name': 'THIS IS LOVE',
            'description':'#M ELÃNCIA, #MELÃO, #MORANGO E #MENTOL',
            'price': '15€'
        },
        {
            'img': 'https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg',
            'name': 'LADY KITTY',
            'description':'#MANGA, #MELÃO, #MORANGO E #MENTA',
            'price': '15€'
        },

        {
            'img': 'https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg',
            'name': 'ALOHA',
            'description':'#ANANÁS, #MANGA E #MENTA',
            'price': '15€'
        },
        {
            'img': 'https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg',
            'name': 'BUBBLADE',
            'description':'#PASTILHA DE MELÃNCIA',
            'price': '15€'
        },
        {
            'img': 'https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg',
            'name': 'GANGSTA',
            'description':'#FRUTOS VERMELHOS E #PÊRA',
            'price': '15€'
        },
    ])

    const triggerLableShicha = (label:string)=>{
        prestige.value = false;
        clasic.value = false;

        switch(label){
            case 'clasic':
                clasic.value = true;
                elements.value = sishaListc.value;
                break
            case 'prestige':
                prestige.value = true;
                elements.value = sishaListp.value;
                break;              
        }
    }


    const triggerLable = (label:string)=>{

        mocktails.value = false;
        winterSeason.value  = false;
        classicos.value = false;

        switch(label){
            case 'mocktails':
                mocktails.value = true;
                elements.value = mocktailsList.value;
                break
            case 'winterSeason':
                winterSeason.value = true;
                elements.value = winterSeasonList.value;
                break;
            case 'classicos':
                classicos.value = true;
                elements.value =classicosList.value;
                break                
        }
    }

    const elements = ref([{}])

    elements.value = mocktailsList.value;

    // ? trigger menu logic
    const menuTrigger = (id:Number)=>{
        CocMenu_.value = false;
        sishaMenu_.value = false;
        elements.value = [{}];
        // * Convert all to false
        menus.value.map(e=>Object.assign(e,{
            'active': (e.id === id)
        }))

        if(id==2){
            CocMenu_.value = true;
            elements.value = mocktailsList.value;
        }else if(id==3){
            elements.value = sangriaList.value;
        }else if(id==1){
            sishaMenu_.value = true;
            elements.value = sishaListc.value;
        }

    }

</script>
