function skillsMember() {
    retrun {
        retrict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        controller: 'SkillMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            memeber: '='
        }
    }
}