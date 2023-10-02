console.log(`================================================ Assignment 01 ========================================`);
function monthOfYear(month) {
    switch (month) {
        case 1:
            console.log(`1. January`);
            break;
            case 2:
                console.log(`2. February`);
                break;
                case 3:
                    console.log(`3. March`);
                    break;
                    case 4:
                        console.log(`4. April`);
                        break;
                        case 5:
                            console.log(`5. May`);
                            break;
                            case 6:
                                console.log(`6. Jun`);
                                break;
                                case 7:
                                    console.log(`7. July`);
                                    break;
                                    case 8:
                                        console.log(`8. August`);
                                        break;
                                        case 9:
                                            console.log(`9. September`);
                                            break;
                                            case 10:
                                                console.log(`10. October`);
                                                break;
                                                case 11:
                                                    console.log(`11. November`);
                                                    break;
                                                    case 12:
                                                        console.log(`12. December`);
                                                        break;
                                                                                                                                                                    
                                                                                                                   
    
        default:
            console.log(`Invalid  Month Data : ${month}`);
            break;
    }


}
monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);
monthOfYear(7);
monthOfYear(9);
console.log(`====================================================== END ====================================================`);
