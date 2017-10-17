const EvaluateSurveyData = [{
    _id: mongoose.Types.ObjectId(evaluate.EvaluateTypeID.MNA),
    evaluateType: mongoose.Types.ObjectId(evaluate.EvaluateTypeID.MNA),
    questions: [{
        sequence: 1,
        description: "過去三個月之中，是否因食慾不佳、消化問題、咀嚼或吞嚥困難以致進食量越來越少？",
        shortName: "進食量",
        questionType: "select",
        maxGrade: 2,
        answers: [{
            options: 1,
            description: "嚴重食慾不佳",
            score: 0,
            nutritionSuggest: "請諮詢營養師或家庭醫師"
        }, {
            options: 2,
            description: "中度食慾不佳",
            score: 1,
            nutritionSuggest: "請諮詢營養師或家庭醫師"
        }, {
            options: 3,
            description: "食慾無變化",
            score: 2,
            standardValue: "食慾無變化"
        }]
    }, {
        sequence: 2,
        description: "近三個月體重變化為何？",
        shortName: "體重變化",
        questionType: "select",
        maxGrade: 3,
        answers: [{
            options: 1,
            description: "體重減輕 ＞ 3 公斤",
            score: 0,
            nutritionSuggest: "請諮詢營養師或家庭醫師"
        }, {
            options: 2,
            description: "不知道",
            score: 1,
            nutritionSuggest: "請諮詢營養師或家庭醫師"
        }, {
            options: 3,
            description: "體重減輕 1 ~ 3 公斤",
            score: 2,
            nutritionSuggest: "請諮詢營養師或家庭醫師"
        }, {
            options: 4,
            description: "體重無改變/體重變重",
            score: 3,
            standardValue: "體重無改變/體重變重"
        }]
    }, {
        sequence: 3,
        description: "行動力狀況為何？",
        shortName: "行動力狀況",
        questionType: "select",
        maxGrade: 2,
        answers: [{
            options: 1,
            description: "臥床或輪椅",
            score: 0,
            sportSuggest: "請諮詢復健科醫師提供適當的身體活動"
        }, {
            options: 2,
            description: "可以下床活動或離開輪椅但無法自由走動",
            score: 1,
            sportSuggest: "請諮詢復健科醫師提供適當的身體活動"
        }, {
            options: 3,
            description: "可以自由走動",
            score: 2,
            standardValue: "可以自由走動"
        }]
    }, {
        sequence: 4,
        description: "過去三個月曾有精神性壓力或急性疾病發作？",
        shortName: "精神性壓力或急性疾病",
        questionType: "select",
        maxGrade: 2,
        answers: [{
            options: 1,
            description: "是",
            score: 0,
            nutritionSuggest: "請諮詢營養師或家庭醫師"
        }, {
            options: 2,
            description: "否",
            score: 2,
            standardValue: "否"
        }]
    }, {
        sequence: 5,
        description: "精神狀況為何？",
        shortName: "精神狀況",
        questionType: "select",
        maxGrade: 2,
        answers: [{
            options: 1,
            description: "嚴重癡呆或抑鬱",
            score: 0,
            nutritionSuggest: "請諮詢營養師或家庭醫師"
        }, {
            options: 2,
            description: "輕度痴呆",
            score: 1,
            nutritionSuggest: "請諮詢營養師或家庭醫師"
        }, {
            options: 3,
            description: "無精神問題",
            score: 2,
            standardValue: "無精神問題"
        }]
    }, {
        sequence: 6,
        description: "身體質量指數為何？",
        shortName: "身體質量指數",
        questionType: "select",
        maxGrade: 3,
        answers: [{
            options: 1,
            description: "BMI ＜ 19",
            score: 0,
            nutritionSuggest: "請諮詢營養師或家庭醫師"
        }, {
            options: 2,
            description: "19 ≦ BMI ＜ 21",
            score: 1,
            nutritionSuggest: "請諮詢營養師或家庭醫師"
        }, {
            options: 3,
            description: "21 ≦ BMI ＜ 23",
            score: 2,
            standardValue: "21 ≦ BMI ＜ 23"
        }, {
            options: 4,
            description: "BMI ≧ 23",
            score: 3,
            nutritionSuggest: "請諮詢營養師或家庭醫師"
        }]
    }, {
        sequence: 7,
        description: "一般性評估",
        shortName: "一般性評估",
        questionType: "multiple",
        maxGrade: 16,
        answers: [{
            options: 1,
            description: "一般性評估",
            score: 0,
            totalGrades: 16,
            standardValue: "16分",
            postQuestions: [{
                sequence: 1,
                description: "是否可以獨立生活？（非住護理之家或醫院）",
                shortName: "獨立生活",
                questionType: "select",
                maxGrade: 1,
                answers: [{
                    options: 1,
                    description: "是的，我可以獨立處理自己的生活",
                    score: 1,
                    standardValue: "是"
                }, {
                    options: 2,
                    description: "不，我無法獨立處理自己的生活",
                    score: 0,
                    nutritionSuggest: "請諮詢營養師或家庭醫師"
                }]
            }, {
                sequence: 2,
                description: "是否每天需服用三種以上的處方藥物？",
                shortName: "處方藥物",
                questionType: "radio",
                maxGrade: 1,
                answers: [{
                    options: 1,
                    description: "是",
                    score: 0,
                    nutritionSuggest: "請諮詢營養師或家庭醫師"
                }, {
                    options: 2,
                    description: "否",
                    score: 1,
                    standardValue: "否"
                }]
            }, {
                sequence: 3,
                description: "是否有褥瘡或皮膚潰瘍？",
                shortName: "皮膚潰瘍",
                questionType: "radio",
                maxGrade: 1,
                answers: [{
                    options: 1,
                    description: "是",
                    score: 0,
                    nutritionSuggest: "請諮詢營養師或家庭醫師"
                }, {
                    options: 2,
                    description: "否",
                    score: 1,
                    standardValue: "否"
                }]
            }, {
                sequence: 4,
                description: "一天中可以吃幾餐完整餐食？",
                shortName: "完整餐食",
                questionType: "select",
                maxGrade: 2,
                answers: [{
                    options: 1,
                    description: "1 餐",
                    score: 0,
                    nutritionSuggest: "請諮詢營養師或家庭醫師"
                }, {
                    options: 2,
                    description: "2 餐",
                    score: 1,
                    nutritionSuggest: "請諮詢營養師或家庭醫師"
                }, {
                    options: 3,
                    description: "3 餐",
                    score: 2,
                    standardValue: "3 餐"
                }]
            }, {
                sequence: 5,
                description: "每天攝取幾份蛋白質？ \n1. 每天至少攝取一份乳製品(牛奶、乳酪、優酪乳) \n2. 每週攝取兩份以上的豆類或蛋類 \n3. 每天均吃些肉、魚、雞鴨",
                shortName: "蛋白質攝取",
                questionType: "select",
                maxGrade: 1,
                answers: [{
                    options: 1,
                    description: "都沒有達到",
                    score: 0,
                    nutritionSuggest: "請諮詢營養師或家庭醫師"
                }, {
                    options: 2,
                    description: "有達到一個",
                    score: 0,
                    nutritionSuggest: "請諮詢營養師或家庭醫師"
                }, {
                    options: 3,
                    description: "有達到二個",
                    score: .5,
                    nutritionSuggest: "請諮詢營養師或家庭醫師"
                }, {
                    options: 4,
                    description: "三個都有達到",
                    score: 1,
                    standardValue: "三個"
                }]
            }, {
                sequence: 6,
                description: "是否每天至少攝取二份或二份以上的蔬菜或水果？",
                shortName: "蔬菜水果攝取",
                questionType: "radio",
                maxGrade: 1,
                answers: [{
                    options: 1,
                    description: "是",
                    score: 1,
                    standardValue: "是"
                }, {
                    options: 2,
                    description: "否",
                    score: 0,
                    nutritionSuggest: "請諮詢營養師或家庭醫師"
                }]
            }, {
                sequence: 7,
                description: "每天攝取多少液體？（包括開水、果汁、咖啡、茶、牛奶：一杯 = 240 cc）",
                shortName: "液體攝取",
                questionType: "select",
                maxGrade: 1,
                answers: [{
                    options: 1,
                    description: "＜ 3杯",
                    score: 0,
                    nutritionSuggest: "請諮詢營養師或家庭醫師"
                }, {
                    options: 2,
                    description: "3 ~ 5杯",
                    score: .5,
                    nutritionSuggest: "請諮詢營養師或家庭醫師"
                }, {
                    options: 3,
                    description: "＞ 5杯",
                    score: 1,
                    standardValue: "＞ 5杯"
                }]
            }, {
                sequence: 8,
                description: "進食的形式為何？",
                shortName: "進食形式",
                questionType: "select",
                maxGrade: 2,
                answers: [{
                    options: 1,
                    description: "無人協助則無法進食",
                    score: 0,
                    nutritionSuggest: "請諮詢營養師或家庭醫師"
                }, {
                    options: 2,
                    description: "可以自己進食但較吃力",
                    score: 1,
                    nutritionSuggest: "請諮詢營養師或家庭醫師"
                }, {
                    options: 3,
                    description: "可以自己進食",
                    score: 2,
                    standardValue: "可以自己進食"
                }]
            }, {
                sequence: 9,
                description: "是否覺得自己營養方面有沒有問題？",
                shortName: "自我營養評估",
                questionType: "select",
                maxGrade: 2,
                answers: [{
                    options: 1,
                    description: "覺得自己營養非常不好",
                    score: 0,
                    nutritionSuggest: "請諮詢營養師或家庭醫師"
                }, {
                    options: 2,
                    description: "不太清楚或營養不太好",
                    score: 1,
                    nutritionSuggest: "請諮詢營養師或家庭醫師"
                }, {
                    options: 3,
                    description: "覺得自己沒有營養問題",
                    score: 2,
                    standardValue: "覺得自己沒有營養問題"
                }]
            }, {
                sequence: 10,
                description: "與其他同年齡的人比較，自己認為自己的健康狀況為何？",
                shortName: "同年齡比較",
                questionType: "select",
                maxGrade: 2,
                answers: [{
                    options: 1,
                    description: "不如同年齡的人",
                    score: 0,
                    nutritionSuggest: "請諮詢營養師或家庭醫師"
                }, {
                    options: 2,
                    description: "不知道",
                    score: .5,
                    nutritionSuggest: "請諮詢營養師或家庭醫師"
                }, {
                    options: 3,
                    description: "和同年齡的人差不多",
                    score: 1,
                    nutritionSuggest: "請諮詢營養師或家庭醫師"
                }, {
                    options: 4,
                    description: "比同年齡的人好",
                    score: 2,
                    standardValue: "比同年齡的人好"
                }]
            }, {
                sequence: 11,
                description: "臂中圍為幾公分？",
                shortName: "臂中圍",
                questionType: "select",
                maxGrade: 1,
                answers: [{
                    options: 1,
                    description: "MAC ＜ 21",
                    score: 0,
                    nutritionSuggest: "請諮詢營養師或家庭醫師"
                }, {
                    options: 2,
                    description: "MAC 21 ~ 21.9",
                    score: .5,
                    standardValue: "MAC 21 ~ 21.9"
                }, {
                    options: 3,
                    description: "MAC ≧ 22",
                    score: 1,
                    standardValue: "MAC 21 ~ 21.9"
                }]
            }, {
                sequence: 12,
                description: "小腿圍為幾公分？",
                shortName: "小腿圍",
                questionType: "select",
                maxGrade: 1,
                answers: [{
                    options: 1,
                    description: "C. C. ＜ 31",
                    score: 0,
                    standardValue: "C. C. ＜ 31"
                }, {
                    options: 2,
                    description: "C. C. ≧ 31",
                    score: 1,
                    nutritionSuggest: "請諮詢營養師或家庭醫師"
                }]
            }]
        }]
    }],
    totalGrades: 30,
    grades: [{
        gradesRange: {
            min: 24,
            max: 30
        },
        status: "正常",
        statusCode: 1,
        description: "營養良好",
        statisticsStatus: "營養良好"
    }, {
        gradesRange: {
            min: 17,
            max: 23.5
        },
        status: "異常",
        statusCode: -1,
        description: "潛在性營養不良",
        statisticsStatus: "潛在性營養不良"
    }, {
        gradesRange: {
            min: 0,
            max: 16
        },
        status: "異常",
        statusCode: -2,
        description: "營養不良",
        statisticsStatus: "營養不良"
    }],
    isDeleted: false,
    version: 1,
    timeStamp: new Date()
}, {
    _id: mongoose.Types.ObjectId(evaluate.EvaluateTypeID.Weak),
    evaluateType: mongoose.Types.ObjectId(evaluate.EvaluateTypeID.Weak),
    questions: [{
        sequence: 1,
        description: "你的握力指數為？",
        shortName: "握力評估",
        questionType: "input",
        unit: "kg",
        maxGrade: 1,
        answers: [{
            gender: "male",
            answerRange: {
                min: 0,
                max: 25.99999
            },
            score: 1,
            exceptionDescription: "疑似無力",
            sportSuggest: "阻力型運動/平衡運動/有氧運動",
            nutritionSuggest: "*足夠的蛋白質攝取 *適當的補充維生素D"
        }, {
            gender: "male",
            answerRange: {
                min: 26,
                max: 9999
            },
            score: 0,
            standardValue: "男性 ≧ 26 KG"
        }, {
            gender: "female",
            answerRange: {
                min: 0,
                max: 17.99999
            },
            score: 1,
            exceptionDescription: "疑似無力",
            sportSuggest: "阻力型運動/平衡運動/有氧運動",
            nutritionSuggest: "*足夠的蛋白質攝取 *適當的補充維生素D"
        }, {
            gender: "female",
            answerRange: {
                min: 18,
                max: 9999
            },
            score: 0,
            standardValue: "女性 ≧ 18 KG"
        }]
    }, {
        sequence: 2,
        description: "你的 6 公尺步行速度為？",
        shortName: "6 公尺步行速度",
        questionType: "input",
        unit: "公尺/秒",
        maxGrade: 1,
        answers: [{
            answerRange: {
                min: 0,
                max: .799999
            },
            score: 1,
            exceptionDescription: "疑似步行遲緩",
            sportSuggest: "阻力型運動/平衡運動/有氧運動",
            nutritionSuggest: "*足夠的蛋白質攝取 \n*適當的補充維生素D"
        }, {
            answerRange: {
                min: .8,
                max: 9999
            },
            score: 0,
            standardValue: "≧ 0.8 公尺/秒"
        }]
    }, {
        sequence: 3,
        description: "過去一年是否有體重減輕大於 5 公斤？",
        shortName: "體重減少",
        questionType: "radio",
        maxGrade: 1,
        answers: [{
            options: 1,
            description: "有",
            score: 1,
            exceptionDescription: "體重減少",
            sportSuggest: "請諮家庭醫師",
            nutritionSuggest: "請諮詢營養師或家庭醫師"
        }, {
            options: 2,
            description: "無",
            score: 0,
            standardValue: "無"
        }]
    }, {
        sequence: 4,
        description: "我做任何事情都覺得費力或缺乏幹勁，過去一週有幾天覺得如此？",
        shortName: "低能量/費力",
        questionType: "radio",
        maxGrade: 1,
        answers: [{
            options: 1,
            description: "3 ~ 7 天",
            score: 1,
            exceptionDescription: "疑似費力",
            sportSuggest: "請諮家庭醫師",
            nutritionSuggest: "請諮詢營養師或家庭醫師"
        }, {
            options: 2,
            description: "0 ~ 2 天",
            score: 0,
            standardValue: "0 ~ 2 天"
        }]
    }, {
        sequence: 5,
        questionType: "singlePageMultiple",
        description: "過去一個月中，工作之外的時間是否有從事慢步、健走、慢跑或劇烈運動？",
        shortName: "慢步、健走、慢跑或劇烈運動",
        unit: "MET(kcal/kg.hr)",
        maxGrade: 1,
        answers: [{
            options: 1,
            description: "是",
            score: 0,
            postQuestions: [{
                sequence: 1,
                questionType: "input",
                description: "A. 散步",
                shortName: "散步",
                unit: "小時",
                answers: [{
                    answerRange: {
                        min: 0,
                        max: 9999
                    }
                }]
            }, {
                sequence: 2,
                questionType: "input",
                description: "B. 健走、復健、爬樓梯",
                shortName: "健走、復健、爬樓梯",
                unit: "小時",
                answers: [{
                    answerRange: {
                        min: 0,
                        max: 9999
                    }
                }]
            }, {
                sequence: 3,
                questionType: "input",
                description: "C. 慢跑、游泳",
                shortName: "慢跑、游泳",
                unit: "小時",
                answers: [{
                    answerRange: {
                        min: 0,
                        max: 9999
                    }
                }]
            }, {
                sequence: 4,
                questionType: "input",
                description: "D. 劇烈運動",
                shortName: "劇烈運動",
                unit: "小時",
                answers: [{
                    answerRange: {
                        min: 0,
                        max: 9999
                    }
                }]
            }],
            totalGrades: 1,
            grades: [{
                gender: "male",
                gradesRange: {
                    min: 0,
                    max: 3.749999
                },
                score: 1,
                status: "異常",
                statusCode: -1,
                description: "低活動量",
                exceptionDescription: "低活動量",
                sportSuggest: "阻力型運動/平衡運動/有氧運動",
                nutritionSuggest: "*足夠的蛋白質攝取 *適當的補充維生素D"
            }, {
                gender: "male",
                gradesRange: {
                    min: 3.75,
                    max: 9999
                },
                score: 0,
                status: "正常",
                statusCode: 1,
                standardValue: "男性 ≧ 3.75 MET-hr",
                description: "正常活動量"
            }, {
                gender: "female",
                gradesRange: {
                    min: 0,
                    max: 2.49999
                },
                score: 1,
                status: "異常",
                statusCode: -1,
                description: "低活動量",
                exceptionDescription: "低活動量",
                sportSuggest: "阻力型運動/平衡運動/有氧運動",
                nutritionSuggest: "*足夠的蛋白質攝取 *適當的補充維生素D"
            }, {
                gender: "female",
                gradesRange: {
                    min: 2.5,
                    max: 9999
                },
                score: 0,
                status: "正常",
                statusCode: 1,
                standardValue: "女性 ≧ 2.5 MET-hr",
                description: "正常活動量"
            }]
        }, {
            options: 2,
            description: "幾乎沒有",
            score: 1,
            exceptionDescription: "低活動量",
            sportSuggest: "阻力型運動/平衡運動/有氧運動",
            nutritionSuggest: "*足夠的蛋白質攝取 *適當的補充維生素D",
            postQuestions: [{
                answers: [{}]
            }]
        }]
    }],
    totalGrades: 5,
    grades: [{
        gradesRange: {
            min: 0,
            max: 0
        },
        status: "正常",
        statusCode: 1,
        description: "恭喜你為衰弱症低風險族群，請繼續保持",
        statisticsStatus: "衰弱症低風險族群"
    }, {
        gradesRange: {
            min: 1,
            max: 2
        },
        status: "異常",
        statusCode: -1,
        description: "衰弱高危險群(pre-frail)；建議每年追蹤",
        statisticsStatus: "衰弱高危險群(pre-frail)"
    }, {
        gradesRange: {
            min: 3,
            max: 5
        },
        status: "異常",
        statusCode: -2,
        description: "衰弱(Frail)；建議轉介處理",
        statisticsStatus: "衰弱(Frail)"
    }],
    isDeleted: false,
    version: 1,
    timeStamp: new Date()
}, {
    _id: mongoose.Types.ObjectId(evaluate.EvaluateTypeID.Nutrition),
    evaluateType: mongoose.Types.ObjectId(evaluate.EvaluateTypeID.Nutrition),
    questions: [{
        sequence: 1,
        description: "食慾狀況？",
        shortName: "食慾狀況",
        questionType: "select",
        maxGrade: 2,
        answers: [{
            options: 1,
            description: "嚴重食慾不佳",
            score: 0,
            nutritionSuggest: "請諮詢營養師或家庭醫師"
        }, {
            options: 2,
            description: "中度食慾不佳",
            score: 1,
            nutritionSuggest: "請諮詢營養師或家庭醫師"
        }, {
            options: 3,
            description: "食慾無變化",
            score: 2,
            standardValue: "食慾無變化",
            isDefault: true
        }]
    }, {
        sequence: 2,
        description: "近三個月體重變化為何？",
        shortName: "體重減少",
        questionType: "select",
        maxGrade: 3,
        answers: [{
            options: 1,
            description: "體重減輕 ＞ 3 公斤",
            score: 0,
            nutritionSuggest: "請諮詢營養師或家庭醫師"
        }, {
            options: 2,
            description: "不知道",
            score: 1,
            nutritionSuggest: "請諮詢營養師或家庭醫師"
        }, {
            options: 3,
            description: "體重減輕 1 ~ 3 公斤",
            score: 2,
            nutritionSuggest: "請諮詢營養師或家庭醫師"
        }, {
            options: 4,
            description: "體重無改變/體重變重",
            score: 3,
            standardValue: "體重無改變/體重變重",
            isDefault: true
        }]
    }, {
        sequence: 3,
        description: "請你自行評估目前行動力？",
        shortName: "行動力狀況",
        questionType: "select",
        maxGrade: 2,
        answers: [{
            options: 1,
            description: "臥床或輪椅",
            score: 0,
            sportSuggest: "請諮詢復健科醫師提供適當的身體活動"
        }, {
            options: 2,
            description: "可以下床活動或離開輪椅但無法自由走動",
            score: 1,
            sportSuggest: "請諮詢復健科醫師提供適當的身體活動"
        }, {
            options: 3,
            description: "可以自由走動",
            score: 2,
            standardValue: "可以自由走動",
            isDefault: true
        }]
    }, {
        sequence: 4,
        description: "請問成人男性與女性的「腰圍警戒值」為幾公分(吋)?",
        shortName: "腰圍警戒值",
        questionType: "select",
        maxGrade: 1,
        answers: [{
            options: 1,
            description: "男性 90 公分，女性 80 公分",
            score: 1,
            standardValue: "男性 90 公分，女性 80 公分",
            isDefault: true
        }, {
            options: 2,
            description: "男性 80 公分，女性 70 公分",
            score: 0,
            nutritionSuggest: "請諮詢營養師並建議天天五蔬果及規律運動，如每週達150分鐘以上身體活動"
        }, {
            options: 3,
            description: "男性 75 公分，女性 70 公分",
            score: 0,
            nutritionSuggest: "請諮詢營養師並建議天天五蔬果及規律運動，如每週達150分鐘以上身體活動"
        }]
    }, {
        sequence: 5,
        description: "請問天天五蔬果，是幾蔬幾果呢？",
        shortName: "天天五蔬果",
        questionType: "select",
        maxGrade: 1,
        answers: [{
            options: 1,
            description: "3 蔬 2 果",
            score: 1,
            standardValue: "3 蔬 2 果",
            isDefault: true
        }, {
            options: 2,
            description: "2 蔬 3 果",
            score: 0,
            nutritionSuggest: "請諮詢營養師並建議天天五蔬果及規律運動，如每週達150分鐘以上身體活動"
        }, {
            options: 3,
            description: "4 蔬 1 果",
            score: 0,
            nutritionSuggest: "請諮詢營養師並建議天天五蔬果及規律運動，如每週達150分鐘以上身體活動"
        }]
    }, {
        sequence: 6,
        description: "請問 BMI 在哪個範圍內才是正常？",
        shortName: "身體質量指數",
        questionType: "select",
        maxGrade: 1,
        answers: [{
            options: 1,
            description: "BMI:12-15",
            score: 0,
            nutritionSuggest: "請諮詢營養師並建議天天五蔬果及規律運動，如每週達150分鐘以上身體活動"
        }, {
            options: 2,
            description: "BMI:15-17",
            score: 0,
            nutritionSuggest: "請諮詢營養師並建議天天五蔬果及規律運動，如每週達150分鐘以上身體活動"
        }, {
            options: 3,
            description: "BMI:18.5-24",
            score: 1,
            standardValue: "BMI:18.5-24",
            isDefault: true
        }]
    }],
    totalGrades: 10,
    grades: [{
        gradesRange: {
            min: 10,
            max: 10
        },
        status: "正常",
        statusCode: 1,
        description: "哇!您的營養識能評估結果皆正常，要保持唷!",
        statisticsStatus: "哇!您的營養識能評估結果皆正常，要保持唷!"
    }, {
        gradesRange: {
            min: 0,
            max: 9
        },
        status: "異常",
        statusCode: -1,
        description: "您的營養識能評估還需加強，請加油喔！",
        statisticsStatus: "您的營養識能評估還需加強，請加油喔！"
    }],
    isDeleted: false,
    version: 1,
    timeStamp: new Date()
}, {
    _id: mongoose.Types.ObjectId(evaluate.EvaluateTypeID.Seated),
    evaluateType: mongoose.Types.ObjectId(evaluate.EvaluateTypeID.Seated),
    questions: [{
        sequence: 1,
        description: "在三十秒內測試你坐姿起立的次數，按下計時的按鈕後開始進行測試。",
        shortName: "30秒椅子坐立次數",
        questionType: "timer",
        unit: "次數",
        maxGrade: 4,
        answers: [{
            gender: "male",
            age: {
                min: 1,
                max: 64
            },
            answerRange: {
                min: 0,
                max: 13
            },
            score: 0,
            sportSuggest: "*阻力型運動[啞鈴、舉重物(：盛滿水的寶特瓶)、彈力帶、油壓式阻力運動] *平衡運動[太極拳、瑜珈、皮拉提斯和平衡運動] *有氧運動[健走、騎踩腳踏車、太極拳、慢跑、長泳、散步、登階、有氧舞蹈]持續時間30 分鐘以上",
            nutritionSuggest: "*足夠的蛋白質攝取   (如附件: 由台北榮總高齡醫學中心提供) *適當的補充維生素D"
        }, {
            gender: "male",
            age: {
                min: 1,
                max: 64
            },
            answerRange: {
                min: 14,
                max: 16
            },
            score: 1,
            sportSuggest: "*阻力型運動[啞鈴、舉重物(：盛滿水的寶特瓶)、彈力帶、油壓式阻力運動] *平衡運動[太極拳、瑜珈、皮拉提斯和平衡運動] *有氧運動[健走、騎踩腳踏車、太極拳、慢跑、長泳、散步、登階、有氧舞蹈]持續時間30 分鐘以上",
            nutritionSuggest: "*足夠的蛋白質攝取   (如附件: 由台北榮總高齡醫學中心提供) *適當的補充維生素D"
        }, {
            gender: "male",
            age: {
                min: 1,
                max: 64
            },
            answerRange: {
                min: 17,
                max: 19
            },
            score: 2,
            standardValue: "17"
        }, {
            gender: "male",
            age: {
                min: 1,
                max: 64
            },
            answerRange: {
                min: 20,
                max: 22
            },
            score: 3,
            standardValue: "17"
        }, {
            gender: "male",
            age: {
                min: 1,
                max: 64
            },
            answerRange: {
                min: 23,
                max: 9999
            },
            score: 4,
            standardValue: "17"
        }, {
            gender: "male",
            age: {
                min: 65,
                max: 69
            },
            answerRange: {
                min: 0,
                max: 13
            },
            score: 0,
            sportSuggest: "*阻力型運動[啞鈴、舉重物(：盛滿水的寶特瓶)、彈力帶、油壓式阻力運動] *平衡運動[太極拳、瑜珈、皮拉提斯和平衡運動] *有氧運動[健走、騎踩腳踏車、太極拳、慢跑、長泳、散步、登階、有氧舞蹈]持續時間30 分鐘以上",
            nutritionSuggest: "*足夠的蛋白質攝取   (如附件: 由台北榮總高齡醫學中心提供) *適當的補充維生素D"
        }, {
            gender: "male",
            age: {
                min: 65,
                max: 69
            },
            answerRange: {
                min: 14,
                max: 16
            },
            score: 1,
            sportSuggest: "*阻力型運動[啞鈴、舉重物(：盛滿水的寶特瓶)、彈力帶、油壓式阻力運動] *平衡運動[太極拳、瑜珈、皮拉提斯和平衡運動] *有氧運動[健走、騎踩腳踏車、太極拳、慢跑、長泳、散步、登階、有氧舞蹈]持續時間30 分鐘以上",
            nutritionSuggest: "*足夠的蛋白質攝取   (如附件: 由台北榮總高齡醫學中心提供) *適當的補充維生素D"
        }, {
            gender: "male",
            age: {
                min: 65,
                max: 69
            },
            answerRange: {
                min: 17,
                max: 19
            },
            score: 2,
            standardValue: "17"
        }, {
            gender: "male",
            age: {
                min: 65,
                max: 69
            },
            answerRange: {
                min: 20,
                max: 22
            },
            score: 3,
            standardValue: "17"
        }, {
            gender: "male",
            age: {
                min: 65,
                max: 69
            },
            answerRange: {
                min: 23,
                max: 9999
            },
            score: 4,
            standardValue: "17"
        }, {
            gender: "male",
            age: {
                min: 70,
                max: 74
            },
            answerRange: {
                min: 0,
                max: 12
            },
            score: 0,
            sportSuggest: "*阻力型運動[啞鈴、舉重物(：盛滿水的寶特瓶)、彈力帶、油壓式阻力運動] *平衡運動[太極拳、瑜珈、皮拉提斯和平衡運動] *有氧運動[健走、騎踩腳踏車、太極拳、慢跑、長泳、散步、登階、有氧舞蹈]持續時間30 分鐘以上",
            nutritionSuggest: "*足夠的蛋白質攝取   (如附件: 由台北榮總高齡醫學中心提供) *適當的補充維生素D"
        }, {
            gender: "male",
            age: {
                min: 70,
                max: 74
            },
            answerRange: {
                min: 13,
                max: 15
            },
            score: 1,
            sportSuggest: "*阻力型運動[啞鈴、舉重物(：盛滿水的寶特瓶)、彈力帶、油壓式阻力運動] *平衡運動[太極拳、瑜珈、皮拉提斯和平衡運動] *有氧運動[健走、騎踩腳踏車、太極拳、慢跑、長泳、散步、登階、有氧舞蹈]持續時間30 分鐘以上",
            nutritionSuggest: "*足夠的蛋白質攝取   (如附件: 由台北榮總高齡醫學中心提供) *適當的補充維生素D"
        }, {
            gender: "male",
            age: {
                min: 70,
                max: 74
            },
            answerRange: {
                min: 16,
                max: 17
            },
            score: 2,
            standardValue: "16"
        }, {
            gender: "male",
            age: {
                min: 70,
                max: 74
            },
            answerRange: {
                min: 18,
                max: 19
            },
            score: 3,
            standardValue: "16"
        }, {
            gender: "male",
            age: {
                min: 70,
                max: 74
            },
            answerRange: {
                min: 20,
                max: 9999
            },
            score: 4,
            standardValue: "16"
        }, {
            gender: "male",
            age: {
                min: 75,
                max: 79
            },
            answerRange: {
                min: 0,
                max: 10
            },
            score: 0,
            sportSuggest: "*阻力型運動[啞鈴、舉重物(：盛滿水的寶特瓶)、彈力帶、油壓式阻力運動] *平衡運動[太極拳、瑜珈、皮拉提斯和平衡運動] *有氧運動[健走、騎踩腳踏車、太極拳、慢跑、長泳、散步、登階、有氧舞蹈]持續時間30 分鐘以上",
            nutritionSuggest: "*足夠的蛋白質攝取   (如附件: 由台北榮總高齡醫學中心提供) *適當的補充維生素D"
        }, {
            gender: "male",
            age: {
                min: 75,
                max: 79
            },
            answerRange: {
                min: 11,
                max: 13
            },
            score: 1,
            sportSuggest: "*阻力型運動[啞鈴、舉重物(：盛滿水的寶特瓶)、彈力帶、油壓式阻力運動] *平衡運動[太極拳、瑜珈、皮拉提斯和平衡運動] *有氧運動[健走、騎踩腳踏車、太極拳、慢跑、長泳、散步、登階、有氧舞蹈]持續時間30 分鐘以上",
            nutritionSuggest: "*足夠的蛋白質攝取   (如附件: 由台北榮總高齡醫學中心提供) *適當的補充維生素D"
        }, {
            gender: "male",
            age: {
                min: 75,
                max: 79
            },
            answerRange: {
                min: 14,
                max: 17
            },
            score: 2,
            standardValue: "14"
        }, {
            gender: "male",
            age: {
                min: 75,
                max: 79
            },
            answerRange: {
                min: 18,
                max: 20
            },
            score: 3,
            standardValue: "14"
        }, {
            gender: "male",
            age: {
                min: 75,
                max: 79
            },
            answerRange: {
                min: 21,
                max: 9999
            },
            score: 4,
            standardValue: "14"
        }, {
            gender: "male",
            age: {
                min: 80,
                max: 84
            },
            answerRange: {
                min: 0,
                max: 8
            },
            score: 0,
            sportSuggest: "*阻力型運動[啞鈴、舉重物(：盛滿水的寶特瓶)、彈力帶、油壓式阻力運動] *平衡運動[太極拳、瑜珈、皮拉提斯和平衡運動] *有氧運動[健走、騎踩腳踏車、太極拳、慢跑、長泳、散步、登階、有氧舞蹈]持續時間30 分鐘以上",
            nutritionSuggest: "*足夠的蛋白質攝取   (如附件: 由台北榮總高齡醫學中心提供) *適當的補充維生素D"
        }, {
            gender: "male",
            age: {
                min: 80,
                max: 84
            },
            answerRange: {
                min: 9,
                max: 12
            },
            score: 1,
            sportSuggest: "*阻力型運動[啞鈴、舉重物(：盛滿水的寶特瓶)、彈力帶、油壓式阻力運動] *平衡運動[太極拳、瑜珈、皮拉提斯和平衡運動] *有氧運動[健走、騎踩腳踏車、太極拳、慢跑、長泳、散步、登階、有氧舞蹈]持續時間30 分鐘以上",
            nutritionSuggest: "*足夠的蛋白質攝取   (如附件: 由台北榮總高齡醫學中心提供) *適當的補充維生素D"
        }, {
            gender: "male",
            age: {
                min: 80,
                max: 84
            },
            answerRange: {
                min: 13,
                max: 15
            },
            score: 2,
            standardValue: "13"
        }, {
            gender: "male",
            age: {
                min: 80,
                max: 84
            },
            answerRange: {
                min: 16,
                max: 17
            },
            score: 3,
            standardValue: "13"
        }, {
            gender: "male",
            age: {
                min: 80,
                max: 84
            },
            answerRange: {
                min: 18,
                max: 9999
            },
            score: 4,
            standardValue: "13"
        }, {
            gender: "male",
            age: {
                min: 84,
                max: 89
            },
            answerRange: {
                min: 0,
                max: 4
            },
            score: 0,
            sportSuggest: "*阻力型運動[啞鈴、舉重物(：盛滿水的寶特瓶)、彈力帶、油壓式阻力運動] *平衡運動[太極拳、瑜珈、皮拉提斯和平衡運動] *有氧運動[健走、騎踩腳踏車、太極拳、慢跑、長泳、散步、登階、有氧舞蹈]持續時間30 分鐘以上",
            nutritionSuggest: "*足夠的蛋白質攝取   (如附件: 由台北榮總高齡醫學中心提供) *適當的補充維生素D"
        }, {
            gender: "male",
            age: {
                min: 84,
                max: 89
            },
            answerRange: {
                min: 5,
                max: 10
            },
            score: 1,
            sportSuggest: "*阻力型運動[啞鈴、舉重物(：盛滿水的寶特瓶)、彈力帶、油壓式阻力運動] *平衡運動[太極拳、瑜珈、皮拉提斯和平衡運動] *有氧運動[健走、騎踩腳踏車、太極拳、慢跑、長泳、散步、登階、有氧舞蹈]持續時間30 分鐘以上",
            nutritionSuggest: "*足夠的蛋白質攝取   (如附件: 由台北榮總高齡醫學中心提供) *適當的補充維生素D"
        }, {
            gender: "male",
            age: {
                min: 84,
                max: 89
            },
            answerRange: {
                min: 11,
                max: 12
            },
            score: 2,
            standardValue: "11"
        }, {
            gender: "male",
            age: {
                min: 84,
                max: 89
            },
            answerRange: {
                min: 13,
                max: 14
            },
            score: 3,
            standardValue: "11"
        }, {
            gender: "male",
            age: {
                min: 84,
                max: 89
            },
            answerRange: {
                min: 15,
                max: 9999
            },
            score: 4,
            standardValue: "11"
        }, {
            gender: "male",
            age: {
                min: 90,
                max: 150
            },
            answerRange: {
                min: 0,
                max: 4
            },
            score: 0,
            sportSuggest: "*阻力型運動[啞鈴、舉重物(：盛滿水的寶特瓶)、彈力帶、油壓式阻力運動] *平衡運動[太極拳、瑜珈、皮拉提斯和平衡運動] *有氧運動[健走、騎踩腳踏車、太極拳、慢跑、長泳、散步、登階、有氧舞蹈]持續時間30 分鐘以上",
            nutritionSuggest: "*足夠的蛋白質攝取   (如附件: 由台北榮總高齡醫學中心提供) *適當的補充維生素D"
        }, {
            gender: "male",
            age: {
                min: 90,
                max: 150
            },
            answerRange: {
                min: 5,
                max: 6
            },
            score: 1,
            sportSuggest: "*阻力型運動[啞鈴、舉重物(：盛滿水的寶特瓶)、彈力帶、油壓式阻力運動] *平衡運動[太極拳、瑜珈、皮拉提斯和平衡運動] *有氧運動[健走、騎踩腳踏車、太極拳、慢跑、長泳、散步、登階、有氧舞蹈]持續時間30 分鐘以上",
            nutritionSuggest: "*足夠的蛋白質攝取   (如附件: 由台北榮總高齡醫學中心提供) *適當的補充維生素D"
        }, {
            gender: "male",
            age: {
                min: 90,
                max: 150
            },
            answerRange: {
                min: 7,
                max: 10
            },
            score: 2,
            standardValue: "7"
        }, {
            gender: "male",
            age: {
                min: 90,
                max: 150
            },
            answerRange: {
                min: 11,
                max: 12
            },
            score: 3,
            standardValue: "7"
        }, {
            gender: "male",
            age: {
                min: 90,
                max: 150
            },
            answerRange: {
                min: 13,
                max: 9999
            },
            score: 4,
            standardValue: "7"
        }, {
            gender: "female",
            age: {
                min: 1,
                max: 64
            },
            answerRange: {
                min: 0,
                max: 12
            },
            score: 0,
            sportSuggest: "*阻力型運動[啞鈴、舉重物(：盛滿水的寶特瓶)、彈力帶、油壓式阻力運動] *平衡運動[太極拳、瑜珈、皮拉提斯和平衡運動] *有氧運動[健走、騎踩腳踏車、太極拳、慢跑、長泳、散步、登階、有氧舞蹈]持續時間30 分鐘以上",
            nutritionSuggest: "*足夠的蛋白質攝取   (如附件: 由台北榮總高齡醫學中心提供) *適當的補充維生素D"
        }, {
            gender: "female",
            age: {
                min: 1,
                max: 64
            },
            answerRange: {
                min: 13,
                max: 15
            },
            score: 1,
            sportSuggest: "*阻力型運動[啞鈴、舉重物(：盛滿水的寶特瓶)、彈力帶、油壓式阻力運動] *平衡運動[太極拳、瑜珈、皮拉提斯和平衡運動] *有氧運動[健走、騎踩腳踏車、太極拳、慢跑、長泳、散步、登階、有氧舞蹈]持續時間30 分鐘以上",
            nutritionSuggest: "*足夠的蛋白質攝取   (如附件: 由台北榮總高齡醫學中心提供) *適當的補充維生素D"
        }, {
            gender: "female",
            age: {
                min: 1,
                max: 64
            },
            answerRange: {
                min: 16,
                max: 17
            },
            score: 2,
            standardValue: "16"
        }, {
            gender: "female",
            age: {
                min: 1,
                max: 64
            },
            answerRange: {
                min: 18,
                max: 19
            },
            score: 3,
            standardValue: "16"
        }, {
            gender: "female",
            age: {
                min: 1,
                max: 64
            },
            answerRange: {
                min: 20,
                max: 9999
            },
            score: 4,
            standardValue: "16"
        }, {
            gender: "female",
            age: {
                min: 65,
                max: 69
            },
            answerRange: {
                min: 0,
                max: 12
            },
            score: 0,
            sportSuggest: "*阻力型運動[啞鈴、舉重物(：盛滿水的寶特瓶)、彈力帶、油壓式阻力運動] *平衡運動[太極拳、瑜珈、皮拉提斯和平衡運動] *有氧運動[健走、騎踩腳踏車、太極拳、慢跑、長泳、散步、登階、有氧舞蹈]持續時間30 分鐘以上",
            nutritionSuggest: "*足夠的蛋白質攝取   (如附件: 由台北榮總高齡醫學中心提供) *適當的補充維生素D"
        }, {
            gender: "female",
            age: {
                min: 65,
                max: 69
            },
            answerRange: {
                min: 13,
                max: 15
            },
            score: 1,
            sportSuggest: "*阻力型運動[啞鈴、舉重物(：盛滿水的寶特瓶)、彈力帶、油壓式阻力運動] *平衡運動[太極拳、瑜珈、皮拉提斯和平衡運動] *有氧運動[健走、騎踩腳踏車、太極拳、慢跑、長泳、散步、登階、有氧舞蹈]持續時間30 分鐘以上",
            nutritionSuggest: "*足夠的蛋白質攝取   (如附件: 由台北榮總高齡醫學中心提供) *適當的補充維生素D"
        }, {
            gender: "female",
            age: {
                min: 65,
                max: 69
            },
            answerRange: {
                min: 16,
                max: 17
            },
            score: 2,
            standardValue: "16"
        }, {
            gender: "female",
            age: {
                min: 65,
                max: 69
            },
            answerRange: {
                min: 18,
                max: 19
            },
            score: 3,
            standardValue: "16"
        }, {
            gender: "female",
            age: {
                min: 65,
                max: 69
            },
            answerRange: {
                min: 20,
                max: 9999
            },
            score: 4,
            standardValue: "16"
        }, {
            gender: "female",
            age: {
                min: 70,
                max: 74
            },
            answerRange: {
                min: 0,
                max: 11
            },
            score: 0,
            sportSuggest: "*阻力型運動[啞鈴、舉重物(：盛滿水的寶特瓶)、彈力帶、油壓式阻力運動] *平衡運動[太極拳、瑜珈、皮拉提斯和平衡運動] *有氧運動[健走、騎踩腳踏車、太極拳、慢跑、長泳、散步、登階、有氧舞蹈]持續時間30 分鐘以上",
            nutritionSuggest: "*足夠的蛋白質攝取   (如附件: 由台北榮總高齡醫學中心提供) *適當的補充維生素D"
        }, {
            gender: "female",
            age: {
                min: 70,
                max: 74
            },
            answerRange: {
                min: 12,
                max: 14
            },
            score: 1,
            sportSuggest: "*阻力型運動[啞鈴、舉重物(：盛滿水的寶特瓶)、彈力帶、油壓式阻力運動] *平衡運動[太極拳、瑜珈、皮拉提斯和平衡運動] *有氧運動[健走、騎踩腳踏車、太極拳、慢跑、長泳、散步、登階、有氧舞蹈]持續時間30 分鐘以上",
            nutritionSuggest: "*足夠的蛋白質攝取   (如附件: 由台北榮總高齡醫學中心提供) *適當的補充維生素D"
        }, {
            gender: "female",
            age: {
                min: 70,
                max: 74
            },
            answerRange: {
                min: 15,
                max: 16
            },
            score: 2,
            standardValue: "15"
        }, {
            gender: "female",
            age: {
                min: 70,
                max: 74
            },
            answerRange: {
                min: 17,
                max: 18
            },
            score: 3,
            standardValue: "15"
        }, {
            gender: "female",
            age: {
                min: 70,
                max: 74
            },
            answerRange: {
                min: 19,
                max: 9999
            },
            score: 4,
            standardValue: "15"
        }, {
            gender: "female",
            age: {
                min: 75,
                max: 79
            },
            answerRange: {
                min: 0,
                max: 9
            },
            score: 0,
            sportSuggest: "*阻力型運動[啞鈴、舉重物(：盛滿水的寶特瓶)、彈力帶、油壓式阻力運動] *平衡運動[太極拳、瑜珈、皮拉提斯和平衡運動] *有氧運動[健走、騎踩腳踏車、太極拳、慢跑、長泳、散步、登階、有氧舞蹈]持續時間30 分鐘以上",
            nutritionSuggest: "*足夠的蛋白質攝取   (如附件: 由台北榮總高齡醫學中心提供) *適當的補充維生素D"
        }, {
            gender: "female",
            age: {
                min: 75,
                max: 79
            },
            answerRange: {
                min: 10,
                max: 13
            },
            score: 1,
            sportSuggest: "*阻力型運動[啞鈴、舉重物(：盛滿水的寶特瓶)、彈力帶、油壓式阻力運動] *平衡運動[太極拳、瑜珈、皮拉提斯和平衡運動] *有氧運動[健走、騎踩腳踏車、太極拳、慢跑、長泳、散步、登階、有氧舞蹈]持續時間30 分鐘以上",
            nutritionSuggest: "*足夠的蛋白質攝取   (如附件: 由台北榮總高齡醫學中心提供) *適當的補充維生素D"
        }, {
            gender: "female",
            age: {
                min: 75,
                max: 79
            },
            answerRange: {
                min: 14,
                max: 15
            },
            score: 2,
            standardValue: "14"
        }, {
            gender: "female",
            age: {
                min: 75,
                max: 79
            },
            answerRange: {
                min: 16,
                max: 17
            },
            score: 3,
            standardValue: "14"
        }, {
            gender: "female",
            age: {
                min: 75,
                max: 79
            },
            answerRange: {
                min: 18,
                max: 9999
            },
            score: 4,
            standardValue: "14"
        }, {
            gender: "female",
            age: {
                min: 80,
                max: 84
            },
            answerRange: {
                min: 0,
                max: 7
            },
            score: 0,
            sportSuggest: "*阻力型運動[啞鈴、舉重物(：盛滿水的寶特瓶)、彈力帶、油壓式阻力運動] *平衡運動[太極拳、瑜珈、皮拉提斯和平衡運動] *有氧運動[健走、騎踩腳踏車、太極拳、慢跑、長泳、散步、登階、有氧舞蹈]持續時間30 分鐘以上",
            nutritionSuggest: "*足夠的蛋白質攝取   (如附件: 由台北榮總高齡醫學中心提供) *適當的補充維生素D"
        }, {
            gender: "female",
            age: {
                min: 80,
                max: 84
            },
            answerRange: {
                min: 8,
                max: 10
            },
            score: 1,
            sportSuggest: "*阻力型運動[啞鈴、舉重物(：盛滿水的寶特瓶)、彈力帶、油壓式阻力運動] *平衡運動[太極拳、瑜珈、皮拉提斯和平衡運動] *有氧運動[健走、騎踩腳踏車、太極拳、慢跑、長泳、散步、登階、有氧舞蹈]持續時間30 分鐘以上",
            nutritionSuggest: "*足夠的蛋白質攝取   (如附件: 由台北榮總高齡醫學中心提供) *適當的補充維生素D"
        }, {
            gender: "female",
            age: {
                min: 80,
                max: 84
            },
            answerRange: {
                min: 11,
                max: 12
            },
            score: 2,
            standardValue: "10"
        }, {
            gender: "female",
            age: {
                min: 80,
                max: 84
            },
            answerRange: {
                min: 13,
                max: 14
            },
            score: 3,
            standardValue: "10"
        }, {
            gender: "female",
            age: {
                min: 80,
                max: 84
            },
            answerRange: {
                min: 15,
                max: 9999
            },
            score: 4,
            standardValue: "10"
        }, {
            gender: "female",
            age: {
                min: 84,
                max: 89
            },
            answerRange: {
                min: 0,
                max: 5
            },
            score: 0,
            sportSuggest: "*阻力型運動[啞鈴、舉重物(：盛滿水的寶特瓶)、彈力帶、油壓式阻力運動] *平衡運動[太極拳、瑜珈、皮拉提斯和平衡運動] *有氧運動[健走、騎踩腳踏車、太極拳、慢跑、長泳、散步、登階、有氧舞蹈]持續時間30 分鐘以上",
            nutritionSuggest: "*足夠的蛋白質攝取   (如附件: 由台北榮總高齡醫學中心提供) *適當的補充維生素D"
        }, {
            gender: "female",
            age: {
                min: 84,
                max: 89
            },
            answerRange: {
                min: 6,
                max: 9
            },
            score: 1,
            sportSuggest: "*阻力型運動[啞鈴、舉重物(：盛滿水的寶特瓶)、彈力帶、油壓式阻力運動] *平衡運動[太極拳、瑜珈、皮拉提斯和平衡運動] *有氧運動[健走、騎踩腳踏車、太極拳、慢跑、長泳、散步、登階、有氧舞蹈]持續時間30 分鐘以上",
            nutritionSuggest: "*足夠的蛋白質攝取   (如附件: 由台北榮總高齡醫學中心提供) *適當的補充維生素D"
        }, {
            gender: "female",
            age: {
                min: 84,
                max: 89
            },
            answerRange: {
                min: 10,
                max: 11
            },
            score: 2,
            standardValue: "10"
        }, {
            gender: "female",
            age: {
                min: 84,
                max: 89
            },
            answerRange: {
                min: 12,
                max: 13
            },
            score: 3,
            standardValue: "10"
        }, {
            gender: "female",
            age: {
                min: 84,
                max: 89
            },
            answerRange: {
                min: 14,
                max: 9999
            },
            score: 4,
            standardValue: "10"
        }, {
            gender: "female",
            age: {
                min: 90,
                max: 150
            },
            answerRange: {
                min: 0,
                max: 4
            },
            score: 0,
            sportSuggest: "*阻力型運動[啞鈴、舉重物(：盛滿水的寶特瓶)、彈力帶、油壓式阻力運動] *平衡運動[太極拳、瑜珈、皮拉提斯和平衡運動] *有氧運動[健走、騎踩腳踏車、太極拳、慢跑、長泳、散步、登階、有氧舞蹈]持續時間30 分鐘以上",
            nutritionSuggest: "*足夠的蛋白質攝取   (如附件: 由台北榮總高齡醫學中心提供) *適當的補充維生素D"
        }, {
            gender: "female",
            age: {
                min: 90,
                max: 150
            },
            answerRange: {
                min: 5,
                max: 7
            },
            score: 1,
            sportSuggest: "*阻力型運動[啞鈴、舉重物(：盛滿水的寶特瓶)、彈力帶、油壓式阻力運動] *平衡運動[太極拳、瑜珈、皮拉提斯和平衡運動] *有氧運動[健走、騎踩腳踏車、太極拳、慢跑、長泳、散步、登階、有氧舞蹈]持續時間30 分鐘以上",
            nutritionSuggest: "*足夠的蛋白質攝取   (如附件: 由台北榮總高齡醫學中心提供) *適當的補充維生素D"
        }, {
            gender: "female",
            age: {
                min: 90,
                max: 150
            },
            answerRange: {
                min: 8,
                max: 10
            },
            score: 2,
            standardValue: "8"
        }, {
            gender: "female",
            age: {
                min: 90,
                max: 150
            },
            answerRange: {
                min: 11,
                max: 12
            },
            score: 3,
            standardValue: "8"
        }, {
            gender: "female",
            age: {
                min: 90,
                max: 150
            },
            answerRange: {
                min: 13,
                max: 9999
            },
            score: 4,
            standardValue: "8"
        }]
    }],
    totalGrades: 4,
    grades: [{
        gradesRange: {
            min: 0,
            max: 0
        },
        status: "異常",
        statusCode: -2,
        description: "不好",
        statisticsStatus: "不好"
    }, {
        gradesRange: {
            min: 1,
            max: 1
        },
        status: "異常",
        statusCode: -1,
        description: "稍差",
        statisticsStatus: "稍差"
    }, {
        gradesRange: {
            min: 2,
            max: 2
        },
        status: "正常",
        statusCode: 1,
        description: "普通",
        statisticsStatus: "普通"
    }, {
        gradesRange: {
            min: 3,
            max: 3
        },
        status: "正常",
        statusCode: 2,
        description: "尚好",
        statisticsStatus: "尚好"
    }, {
        gradesRange: {
            min: 4,
            max: 4
        },
        status: "正常",
        statusCode: 3,
        description: "很好",
        statisticsStatus: "很好"
    }],
    isDeleted: false,
    version: 1,
    timeStamp: new Date()
}, {
    _id: mongoose.Types.ObjectId(evaluate.EvaluateTypeID.Metabolism),
    evaluateType: mongoose.Types.ObjectId(evaluate.EvaluateTypeID.Metabolism),
    questions: [{
        sequence: 1,
        description: "你的空腹血糖數值為",
        shortName: "空腹血糖",
        questionType: "input",
        unit: "mg/dL",
        maxGrade: 1,
        answers: [{
            answerRange: {
                min: 0,
                max: 69.99999
            },
            score: 0,
            nutritionSuggest: "請諮詢家庭醫師或相關專科醫師"
        }, {
            answerRange: {
                min: 70,
                max: 100
            },
            score: 1,
            standardValue: "≦ 100mg/dl"
        }, {
            answerRange: {
                min: 100.00001,
                max: 9999
            },
            score: 0,
            nutritionSuggest: "請諮詢家庭醫師或相關專科醫師"
        }]
    }, {
        sequence: 2,
        description: "你的總膽固醇數值為",
        shortName: "總膽固醇",
        questionType: "input",
        unit: "mg/dL",
        maxGrade: 1,
        answers: [{
            answerRange: {
                min: 0,
                max: 119.99999
            },
            score: 0,
            nutritionSuggest: "請諮詢家庭醫師或相關專科醫師"
        }, {
            answerRange: {
                min: 120,
                max: 200
            },
            score: 1,
            standardValue: "≦ 200mg/dl"
        }, {
            answerRange: {
                min: 200.00001,
                max: 9999
            },
            score: 0,
            nutritionSuggest: "請諮詢家庭醫師或相關專科醫師"
        }]
    }, {
        sequence: 3,
        description: "你的三酸甘油脂數值為",
        shortName: "三酸甘油脂",
        questionType: "input",
        unit: "mg/dL",
        maxGrade: 1,
        answers: [{
            answerRange: {
                min: 0,
                max: 149.99999
            },
            score: 1,
            standardValue: "＜ 150mg/dl"
        }, {
            answerRange: {
                min: 150,
                max: 9999
            },
            score: 0,
            nutritionSuggest: "請諮詢家庭醫師或相關專科醫師"
        }]
    }, {
        sequence: 4,
        description: "你的低密度膽固醇數值為",
        shortName: "低密度膽固醇",
        questionType: "input",
        unit: "mg/dL",
        maxGrade: 1,
        answers: [{
            answerRange: {
                min: 0,
                max: 129.99999
            },
            score: 1,
            standardValue: "＜ 130mg/dl"
        }, {
            answerRange: {
                min: 130,
                max: 9999
            },
            score: 0,
            nutritionSuggest: "請諮詢家庭醫師或相關專科醫師"
        }]
    }, {
        sequence: 5,
        description: "收縮血壓",
        shortName: "收縮血壓",
        questionType: "input",
        unit: "mmHg",
        maxGrade: 1,
        answers: [{
            answerRange: {
                min: 0,
                max: 89.99999
            },
            score: 0,
            nutritionSuggest: "請諮詢家庭醫師或相關專科醫師"
        }, {
            answerRange: {
                min: 90,
                max: 130
            },
            score: 1,
            standardValue: "收縮壓 ≦ 130、舒張壓 ≦ 85"
        }, {
            answerRange: {
                min: 130.00001,
                max: 9999
            },
            score: 0,
            nutritionSuggest: "請諮詢家庭醫師或相關專科醫師"
        }]
    }, {
        sequence: 6,
        description: "舒張血壓",
        shortName: "舒張血壓",
        questionType: "input",
        unit: "mmHg",
        maxGrade: 1,
        answers: [{
            answerRange: {
                min: 0,
                max: 59.99999
            },
            score: 0,
            nutritionSuggest: "請諮詢家庭醫師或相關專科醫師"
        }, {
            answerRange: {
                min: 60,
                max: 85
            },
            score: 1,
            standardValue: "收縮壓 ≦ 130、舒張壓 ≦ 85"
        }, {
            answerRange: {
                min: 85.00001,
                max: 9999
            },
            score: 0,
            nutritionSuggest: "請諮詢家庭醫師或相關專科醫師"
        }]
    }, {
        sequence: 7,
        description: "腰圍",
        shortName: "腰圍",
        questionType: "scroll",
        unit: "公分",
        maxGrade: 1,
        answers: [{
            gender: "male",
            answerRange: {
                min: 0,
                max: 29.99999
            },
            score: 0,
            nutritionSuggest: "請諮詢家庭醫師或相關專科醫師"
        }, {
            gender: "male",
            answerRange: {
                min: 30,
                max: 90
            },
            score: 1,
            standardValue: "男生 ≦ 90公分"
        }, {
            gender: "male",
            answerRange: {
                min: 90.00001,
                max: 9999
            },
            score: 0,
            nutritionSuggest: "請諮詢家庭醫師或相關專科醫師"
        }, {
            gender: "female",
            answerRange: {
                min: 0,
                max: 29.99999
            },
            score: 0,
            nutritionSuggest: "請諮詢家庭醫師或相關專科醫師"
        }, {
            gender: "female",
            answerRange: {
                min: 30,
                max: 80
            },
            score: 1,
            standardValue: "女生 ≦ 80公分"
        }, {
            gender: "female",
            answerRange: {
                min: 80.00001,
                max: 9999
            },
            score: 0,
            nutritionSuggest: "請諮詢家庭醫師或相關專科醫師"
        }]
    }],
    totalGrades: 7,
    grades: [{
        gradesRange: {
            min: 5,
            max: 7
        },
        status: "正常",
        statusCode: 1,
        description: "你的代謝評估顯示正常。",
        statisticsStatus: "代謝正常"
    }, {
        gradesRange: {
            min: 0,
            max: 4
        },
        status: "異常",
        statusCode: -1,
        description: "你可能有代謝症候群(Metabolic Syndrome)，請諮詢家庭醫師或相關專科醫師。",
        statisticsStatus: "可能有代謝症候群"
    }],
    isDeleted: false,
    version: 1,
    timeStamp: new Date()
}];