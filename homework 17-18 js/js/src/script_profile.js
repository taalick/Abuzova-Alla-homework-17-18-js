$(function(){
	var template = $('#profile').html();
	var articles = {
		FIO: 'Абузова Алла Амрулловна',
		university: 'Студент Харьковского национального университета радиоэлектроники',
		youLearnTo: {
			variant1: 'Хочу работать в IT', 
			variant2: 'Надоело сидеть дома', 
			variant3: 'Друзья мне спихивают своих домашних животных :)))'
		},
		phoneNumber: '+380992533870',
		profileVKontakte: 'https://vk.com/id28756374',
		fidbek: {
			variant1: 'Могу приютить домашних животных на время:)))))', 
			variant2: 'Также могу создать плагин из карусели используя JQuery:'
		},
		imagesName: {
			imageName1: 'Рисунок 1',
			imageName2: 'Рисунок 2',
			imageName3: 'Рисунок 3',
			imageName4: 'Рисунок 4',
			imageName5: 'Рисунок 5',
			imageName6: 'Рисунок 6',
			imageName7: 'Рисунок 7',
			imageName8: 'Рисунок 8',
			imageName9: 'Рисунок 9',	
			imageName10: 'Рисунок 10',
			imageName11: 'Рисунок 11',
			imageName12: 'Рисунок 12',	
		},		
	};
	var content = tmpl(template, articles);
	$('body').append(content);
});