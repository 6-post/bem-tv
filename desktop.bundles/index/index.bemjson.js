({
    block: 'page',
    title: 'Television',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: 'index.css', ie: false },
        { elem: 'css', url: 'index', ie: true },
        { elem: 'css', url: 'reset.css', ie: false },

        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: 'ymodules.js' },
        { elem: 'js', url: 'index.js' },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'meta', attrs: { name: 'keywords', content: '' }}
    ],
    content: [
        {
            block: 'wrapper',
            content: [
                {
                    block: 'header',
                    content: [
                        {
                            block: 'country-choose',
                            content: [
                                {
                                    elem: 'city',
                                    text: 'Москва'
                                },
                                {
                                    elem: 'region',
                                    text: 'Сменить регион'                      
                                }
                     
                            ]
                        }
                    ]
                },
                {
                block: 'content',
                    content: [
                        {
                            block: 'film-title',
                            content: [
                                'Брачный контракт',
                                {
                                    elem: 'info',
                                    text: 'сериалы, 16+'
                                }
                            ]
                        },
                        {
                            block: 'film-block-info',
                            content: [
                                {
                                block: 'film-block-info-list',
                                    content: [
                                        {
                                            elem: 'name',
                                            text: 'Произведено:'
                                        },
                                        {
                                            elem: 'text',
                                            text: '2009'
                                        },
                                        {
                                            elem: 'name',
                                            text: 'Режиссер:'
                                        },
                                        {
                                            elem: 'text',
                                            text: 'Андрей Черных'
                                        },
                                        {
                                            elem: 'name',
                                            text: 'В ролях:'
                                        },
                                        {
                                            elem: 'text',
                                            content: [
												'Армандс Нейландс-Яунземс, Роман Агеев, Игорь Ботвин, Татьяна Колганова, Сергей Кошонин ',
												{
													block: 'all-actors',
													text: '• • •'
												}
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'film-block-images',
                            content: [
                                {
                                    elem: 'img-wrap',
                                    content: [
                                        {
                                            elem: 'img',
                                            image: 'http://avatars.yandex.net/get-tv-shows/1345134165467M81123/large',
                                            width: 400,
                                            height: 300
                                        }        
                                    ]
                                },
                                {
                                    elem: 'thumbs',
									js: true,
                                    content: [
                                        {
                                            elem: 'thumb',
                                            image: 'http://avatars.yandex.net/get-tv-shows/1345134165467M81123/small',
                                            cls: ['film-block-images__thumb_active_img']
                                        },
                                        {
                                            elem: 'thumb',
                                            image: 'http://avatars.yandex.net/get-tv-shows/1345134165546M49671/small'
                                        },
                                        {
                                            elem: 'thumb',
                                            image: 'http://avatars.yandex.net/get-tv-shows/1345134165633M91362/small'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'film-block-description',
                            cls: ['film-block-description__left'],
                            content: [
                                {
                                    elem: 'title',
                                    text: 'Описание'
                                },
                                {
                                    elem: 'text',
                                    text: 'По одноименному бестселлеру Татьяны Огородниковой. Трое мужчин - психолог Петр Разумовский, юрист Владимир Перов и бывший сотрудник правоохранительных органов Леонид Богатырев открывают брачное агентство. Их кредо - стоять на страже женских интересов. Их задача - помогать семейным парам или отдельным членам семей в их повседневном "брачном" труде, в ситуации развода или в условиях постразводных обстоятельств. В клиентскую базу агентства входят совершенно разные люди, и у каждого из них - не один скелет в шкафу, а за красивым фасадом счастливой семьи нередко скрываются настоящие драмы... Когда дела семейные начинают напоминать захватывающий детектив, а на кону оказывается человеческая жизнь, троице приходится приниматься за собственное расследование. И такое случается часто...'
                                }
                            ]
                        }
                    ]
                },
                {
                block: 'footer',
                    content: [
                        {
                            block: 'film-recommended',
                                content: [           
                                    {
                                        elem: 'title',
                                        text: 'Смотрите также'
                                    },
                                    {
                                        elem: 'list',
                                        content: [
                                            {
                                                elem: 'item',
                                                content: [
                                                    {
                                                        elem: 'link',
                                                        content: [
                                                            {
                                                                elem: 'img',
                                                                image: 'http://avatars.yandex.net/get-tv-shows/1396542209876M21014/middle',
                                                                width: 160,
                                                                height: 120
                                                            } 
                                                        ]
                                                    },
                                                    {
                                                        elem: 'name',
                                                        content: [
                                                            {
                                                                elem: 'name-link',
                                                                url: '#',
                                                                text: 'Красный лотос'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        elem: 'date',
                                                        text: 'сегодня 11:55'
                                                    },
                                                    {
                                                        elem: 'channel',
                                                        text: 'ТВ Центр'
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'item',
                                                content: [
                                                    {
                                                        elem: 'link',
                                                        content: [
                                                            {
                                                                elem: 'img',
                                                                image: 'http://avatars.yandex.net/get-tv-shows/1385040171427M33150/middle',
                                                                width: 160,
                                                                height: 120
                                                            } 
                                                        ]
                                                    },
                                                    {
                                                        elem: 'name',
                                                        content: [
                                                            {
                                                                elem: 'name-link',
                                                                url: '#',
                                                                text: 'Разрушители мифов'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        elem: 'date',
                                                        text: 'сегодня 12:20'
                                                    },
                                                    {
                                                        elem: 'channel',
                                                        text: 'Пятница'
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'item',
                                                content: [
                                                    {
                                                        elem: 'link',
                                                        content: [
                                                            {
                                                                elem: 'img',
                                                                image: 'http://avatars.yandex.net/get-tv-shows/1365778442468M90571/middle',
                                                                width: 160,
                                                                height: 120
                                                            } 
                                                        ]
                                                    },
                                                    {
                                                        elem: 'name',
                                                        content: [
                                                            {
                                                                elem: 'name-link',
                                                                url: '#',
                                                                text: 'Сердца трех. 1-я серия'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        elem: 'date',
                                                        text: 'сегодня 12:30'
                                                    },
                                                    {
                                                        elem: 'channel',
                                                        text: '5 канал'
                                                    }
                                                ]
                                            }
                                        ]

                                    }
                                ]
                            }
                        ]
                    }    
                ]
            }                                
        ]
    })
