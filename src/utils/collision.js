export default function checkCollision(x, y) {
    try {
        switch (levels.one[y] && levels.one[y][x] && levels.one[y][x]) {
            case 0:
                setPage("none");
                return false;
            case 2: 
                setPage("about");
                return false;
            case 3:
                setPage("projects");
                return false;
            case 4:
                setPage("skills");
                break;
            case 5:
                setPage("contact");
                break;
            case 7:
                setPage("none");
                return false;
            default:
                setPage("none");
                return true;
        }
    } catch(err) {
        console.log(err);
        return true;
    }
    
}