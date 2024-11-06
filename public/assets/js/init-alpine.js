function data(){
    return{
        isLeaderboardMenu : false,
        toggleLeaderboardMenu(){
            this.isLeaderboardMenu = !this.isLeaderboardMenu
        },
        isUsersProfileMenu : false,
        toggleUsersProfileMenu(){
            this.isUsersProfileMenu = !this.isUsersProfileMenu
        },
        isOpenSidebar : true,
        toggleSidebar(){
            this.isOpenSidebar = !this.isOpenSidebar
        }
    }
}