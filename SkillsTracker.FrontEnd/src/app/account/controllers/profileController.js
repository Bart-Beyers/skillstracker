(function (app) {
	'use strict';
	
	var ProfileController = (function () {

		function ProfileController(AccountService, skills, projects) {
			
			this.accountService = AccountService;
			
			// Todo: should come from AccountService
			this.userData = {
				user: {
					fullName: 'Dieter Goetelen',
					title: 'Software Engineer .NET'
				}
			};
			
			this.skills = skills;
			this.projects = projects;
			
		}
		
		ProfileController.prototype.setFilter = function (tag) {
			this.filterPredicate = tag;
		};
		  
		ProfileController.prototype.updateSkill = function (skill, oldSkill) {
			console.log('Todo: updating database for skill: ', skill, 'oldSkill: ', oldSkill); 
		};
		  
		ProfileController.prototype.deleteSkill = function (skill) {
			var skills = [];
			
			angular.forEach(this.skills, function (s) {
				if (s.id !== skill.id) {
					skills.push(s);
				}
			});

			console.log('Todo: delete skill in database for', skill);
			
			this.skills = skills;
		};
		
		ProfileController.$inject = ['AccountService', 'skills', 'projects'];
		
		return ProfileController;
		
	}());
	
	app.controller('ProfileController', ProfileController);
	
}(angular.module('app.account')));