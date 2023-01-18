module Jekyll
  module TagHueFilter
    TWO_30 = 2147483648  # 2<<30
    TWO_31 = 4294967296  # 2<<31
    def _overflow(a)
        if a >= TWO_31 || a <= (-TWO_31 - 1) then
            # Simulate integer overflow https://stackoverflow.com/a/37953915
            ((a + TWO_30) % (2 * (TWO_30)) - (TWO_30))
        else
            a
        end
    end
    def tag_hue(input)
        hash = input.downcase().chars().reduce(0) { |a,b|
            aa = _overflow(a<<5)
            a = _overflow((aa - a) + b[0].ord)
            a&a
        }
        return (if (hash < 0) then -(-hash % 180) else (hash % 180) end) + 180
    end
  end
end
Liquid::Template.register_filter(Jekyll::TagHueFilter)
