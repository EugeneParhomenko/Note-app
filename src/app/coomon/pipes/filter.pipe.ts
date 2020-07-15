import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'edmFilter'
})

export class FilterPipe implements PipeTransform {
    transform(items: any, value: string, ):any {

        if (items.lengrh === 0 || !value) {
            return items;
        }

        return items.filter((i) => {
            const t = Object.assign({}, i);
            
            if(t['title'].toLowerCase().indexOf(value.toLowerCase()) !== -1) {
                return t['title'].toLowerCase().indexOf(value.toLowerCase()) !== -1;
            } else if (t['desc'].toLowerCase().indexOf(value.toLowerCase()) !== -1) {
                return t['desc'].toLowerCase().indexOf(value.toLowerCase()) !== -1;
            }
            
        })
    }
}